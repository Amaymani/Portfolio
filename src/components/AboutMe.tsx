import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section>

        
        <div className='w-full flex pb-11 flex-col justify-center items-center'>

        <motion.img
        src='/down-arrow.png'
        className="hello-css pb-24"
        alt='scroll'
        width={64}
        height={64}
        animate={{
          y: [0, 150, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          opacity: {
            duration: 0.5,
            repeat: Infinity,
          },
        }}
      />

            <div className="card pt-14 leading-normal text-xl max-w-[1200px] min-h-[350px] flex flex-col justify-between h-[300px] p-[35px] border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(76,76,76,0.59)] dark:bg-[rgba(0,0,0,0.59)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px]">
                <p>
Welcome to <strong> PARA-Space!</strong> <br/> I&#39;m Amay, a versatile full-stack web developer deeply immersed in the realms of Web 3.0. <br/> From crafting sleek user interfaces to robust back-end functionalities, I bring a holistic approach to web development with the latest tech in the market. Dive into my portfolio and witness the synergy of design and technology as we navigate the exciting future of the digital landscape.</p>
                <p className="text-sm dark:text-[#dfb25e]">- Amay Mani Tripathi</p>
            </div>
        </div>
    </section>
  )
}

export default AboutMe