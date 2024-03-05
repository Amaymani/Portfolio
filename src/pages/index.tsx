"use client"
import Image from "next/image";
import { useTypingText } from "../components/useTypingTest";
import { motion, useMotionValue, useTransform } from "framer-motion";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'


export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time:any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])

  const { word, stop, start } = useTypingText({
    words: [" ", " Frontend", " UI/UX", " Backend"," Web3"],
    keySpeed: 80,
    maxPauseAmount: 20,
  });

  return (
    <>
      <section className="hero pb-[300px]">
        <>
          <div className="mt-24 flex justify-between">
            <div className="relative top-[300px] left-[300px]">
              <h1 className="text-8xl ">PARA-<span className="font-semibold text-black dark:text-[#BF8211] [text-shadow:0_0_9px_#A6600A]">space</span> </h1>
              <h1 className="text-6xl pt-4">I do <span className="text-[#BF8211]">{word}</span></h1>
            </div>
            <div>



            <motion.img
            className="relative right-[350px] top-[160px] border-2 border-gray-500 bg-[rgba(39,_39,_39,_0.1)] backdrop-filter backdrop-blur-[60px] [box-shadow:0_0_80px_rgba(0,_0,_0,_0.3)]"
            style={{
                width: 320,
                height: 426,
                borderRadius: 30,
                cursor: "grab"
            }}
            src="/amay.png"
            drag
            dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing" }}
        />



            </div>
          </div>
        </>
      </section>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
      
    </>
  );
}
