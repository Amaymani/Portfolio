import React, { useState, useEffect, useRef } from "react";

const FORWARD = "forward" as const;
const BACKWARD = "backward" as const;

type Direction = typeof FORWARD | typeof BACKWARD;

interface TypingTextProps {
  words: string[];
  keySpeed?: number;
  maxPauseAmount?: number;
}

export const useTypingText = ({
  words,
  keySpeed = 1000,
  maxPauseAmount = 10,
}: TypingTextProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState<string[]>(
    words[wordIndex].split("")
  );
  const [isStopped, setIsStopped] = useState(false);
  const direction = useRef<Direction>(BACKWARD);
  const typingInterval = useRef<any | null>(null);
  const letterIndex = useRef<number>(0);

  const stop = () => {
    if (typingInterval.current !== null) {
      clearInterval(typingInterval.current);
      typingInterval.current = null;
    }
    setIsStopped(true);
  };

  useEffect(() => {
    // Start at 0
    let pauseCounter = 0;

    if (isStopped) return;

    const typeLetter = () => {
      if (letterIndex.current >= words[wordIndex].length) {
        direction.current = BACKWARD;

        // Begin pause by setting the maxPauseAmount prop equal to the counter
        pauseCounter = maxPauseAmount;
        return;
      }

      const segment = words[wordIndex].split("");
      setCurrentWord((prevWord) => prevWord.concat(segment[letterIndex.current]));
      letterIndex.current = letterIndex.current + 1;
    };

    const backspace = () => {
      if (letterIndex.current === 0) {
        const isOnLastWord = wordIndex === words.length - 1;

        setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
        direction.current = FORWARD;

        return;
      }

      setCurrentWord((prevWord) => prevWord.slice(0, prevWord.length - 1));
      letterIndex.current = letterIndex.current - 1;
    };

    typingInterval.current = setInterval(() => {
      // Wait until counter hits 0 to do any further action
      if (pauseCounter > 0) {
        pauseCounter = pauseCounter - 1;
        return;
      }

      if (direction.current === FORWARD) {
        typeLetter();
      } else {
        backspace();
      }
    }, keySpeed);

    return () => {
      if (typingInterval.current !== null) {
        clearInterval(typingInterval.current);
      }
    };
  }, [currentWord, wordIndex, keySpeed, words, maxPauseAmount, isStopped]);

  return {
    word: (
      <span className={`word ${currentWord.length ? "full" : "empty"}`}>
        <span>{currentWord.length ? currentWord.join("") : "0"}</span>
      </span>
    ),
    start: () => setIsStopped(false),
    stop,
  };
};
