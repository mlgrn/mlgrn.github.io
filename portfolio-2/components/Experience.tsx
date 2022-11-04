import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
 
type Props = {}

function Experience({}: Props) {
  return (
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
    className="flex flex-col relative overflow-hidden  h-screen text-lett md:text-left max-w-full
    md:flex-row  px-10 justify-evenly mx-auto items-center">
        
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>
        

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
        </motion.div>
  )
}

export default Experience