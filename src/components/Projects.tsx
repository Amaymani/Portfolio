import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const Projects = () => {

  return (
    <section id="projects">
        <div className='flex justify-center'>
            <h1 className='flex whitespace-pre pb-20 justify-center text-white pt-24 text-4xl font-bold'>My <span className='text-primary'>Projects</span></h1>
            <div className="bg-neutral-800">
                <div className="flex h-48 items-center justify-center">
                  <span className="font-semibold uppercase text-primary">
                    Scroll down
                    </span>
                </div>
                <HorizontalScrollCarousel />
                <div className="flex h-48 items-center justify-center">
                    <span className="font-semibold uppercase text-primary">
                    Scroll up
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}



const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };
  

  const Card = ({ card }: { card: CardType }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    );
  };
  
  
  type CardType = {
    url: string;
    title: string;
    id: number;
  };
  
  const cards: CardType[] = [
    {
      url: "/",
      title: "Project 1",
      id: 1,
    },
    {
      url: "/",
      title: "Project 2",
      id: 2,
    },
    {
      url: "/",
      title: "Project 3",
      id: 3,
    },
    {
      url: "/",
      title: "Project 4",
      id: 4,
    },
    {
      url: "/",
      title: "Project 5",
      id: 5,
    },
    {
      url: "/",
      title: "Project 6",
      id: 6,
    },
    {
      url: "/",
      title: "Project 7",
      id: 7,
    },
  ];


export default Projects;