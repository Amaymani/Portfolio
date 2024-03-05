import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <section id="skills-hehe" className='about-me bg-[#d2a813] bg-[linear-gradient(315deg,_#d2a813_0%,_#131212_74%)]'>
        <h1 className='flex whitespace-pre pb-20 justify-center text-white pt-24 text-4xl font-bold'>My <span className='text-primary'>Skills</span></h1>
        <div className='w-full pb-20 px-60 grid grid-cols-4 gap-4 grid-rows-3'>
            <div className='flex object-fill cols-span-2 row-span-2 justify-center border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(253,253,253,0.12)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px] hover:bg-white transition ease-in-out delay-100 duration-500'><Image className='my-auto h-[128px]' src={"/next.png"} alt='next_logo' width={236} height={0}></Image></div>
            <div className='flex object-fill justify-center py-8 border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(253,253,253,0.12)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px] hover:bg-white transition ease-in-out delay-100 duration-500'><Image className='my-auto h-[128px]' src={"/mongo.png"} alt='next_logo' width={128} height={128}></Image></div>
            <div className='flex object-fill justify-center py-8 border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(253,253,253,0.12)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px] hover:bg-white transition ease-in-out delay-100 duration-500'><Image className='my-auto h-[118px]' src={"/react.png"} alt='next_logo' width={128} height={128}></Image></div>
            <div className='flex object-fill justify-center py-8 border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(253,253,253,0.12)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px] hover:bg-white transition ease-in-out delay-100 duration-500'><Image className='my-auto h-[75px]' src={"/tail.png"} alt='next_logo' width={128} height={77}></Image></div>
            <div className='flex object-fill justify-center py-8 border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(253,253,253,0.12)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px] hover:bg-white transition ease-in-out delay-100 duration-500'><Image className='my-auto h-[128px]' src={"/sql.png"} alt='next_logo' width={128} height={76.5}></Image></div>
            <div className='flex object-fill justify-center py-8 border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(253,253,253,0.12)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px] hover:bg-white transition ease-in-out delay-100 duration-500'><Image className='my-auto h-[128px]' src={"/boot.png"} alt='next_logo' width={128} height={76.5}></Image></div>
            <div className='flex object-fill justify-center py-8 border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(253,253,253,0.12)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px] hover:bg-white transition ease-in-out delay-100 duration-500'><Image className='my-auto h-[45px]' src={"/exp.png"} alt='next_logo' width={160} height={76.5}></Image></div>
            <div className='flex object-fill justify-center py-8 border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(253,253,253,0.12)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px] hover:bg-white transition ease-in-out delay-100 duration-500'><Image className='my-auto h-[80px] w-[64px]' src={"/django.png"} alt='next_logo' width={128} height={76.5}></Image></div>
            <div className='flex object-fill justify-center py-8 border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(253,253,253,0.12)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px] hover:bg-white transition ease-in-out delay-100 duration-500'><Image className='my-auto h-[100px] w-[75px]' src={"/fire.png"} alt='next_logo' width={128} height={76.5}></Image></div>
            <div className='flex object-fill justify-center py-8 border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(253,253,253,0.12)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px] hover:bg-white transition ease-in-out delay-100 duration-500'><Image className='my-auto h-[100px]' src={"/framer.png"} alt='next_logo' width={100} height={76.5}></Image></div>
            <div className='flex object-fill justify-center py-8 border-[1px] border-[rgba(255,255,255,.25)] rounded-[20px] bg-[rgba(253,253,253,0.12)] [box-shadow:0_0_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-[15px] hover:bg-white transition ease-in-out delay-100 duration-500'><Image className='my-auto h-[76px]' src={"/node.png"} alt='next_logo' width={128} height={76.5}></Image></div>
        </div>
    </section>
  )
}

export default Skills;