import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'
import EmilioTri from "../images/HotWobble-2.jpg"
// portfolio-2/images/HotWobble-2.jpg

type Props = {}

const About = (props: Props) => {
  return (
    <div 

    className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        
       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3> 
        
        <motion.div 
        initial={{
            x:-200,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1    
        }}
        transition={{duration: 1}}
        viewport={{once: true}}

        className="-mb-20 md:mb-0 flex-shrink-0 lg:w-1/2 lg:h-1/2 md:w-2/3 md:h-2/3  object-cover xl:w-[500px] xl:h-[500px]"
        >
            <Image src={EmilioTri} alt="emilio with bass, synth, and keyboard" className="rounded-[40px]"/>
        </motion.div>

        <motion.div 
         initial={{opacity:0}}
         whileInView={{opacity: 1}}
         transition={{duration: 1.3}}
        className='space-y-10  px-0 md:p-10'>
            <h4 className="text-4xl font-semibold">
                This is my <span className="underline decoration-[#df73ff]">story</span></h4>
                <p className="text-base">Emilio Guarino is a performer and producer with experience 
                    that ranges from orchestral performance to contemporary electronic 
                    music, modern improvisation, and multi-disciplinary collaborative works. 
                    As a bassist, he has performed or collaborated with a wide variety of 
                    creative personalities ...</p>
        </motion.div>

    </div>
  )
}

export default About