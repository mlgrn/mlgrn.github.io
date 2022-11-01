import React from 'react'
import Image from 'next/image'
import ExpImg from  "../images/tenzies_game_screenshot.png"
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden">
        
       <motion.div 
       initial={{
        y: -100,
        opacity:0
       }}
       transition={{duration:1.2}}
       whileInView={{opacity:1, y: 0}}
       viewport={{once: true}}
       className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center">
        <Image src={ExpImg} alt='This is an example image' className="rounded-full"/>
       </motion.div>
        
        <div className="px-0 md:px-10 ">
            <h4 className="text-4xl font-light">JOB TITLE</h4>
            <p className="font-bold text-2xl mt-1">Company</p>
            <div className="flex space-x-2 my-2">
                {/* technology */}
                {/* technology */}
                {/* technology */}
            </div>
            <div className="uppercase py-5 text-gray-300">Sept 1901 - August 1955</div>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>bullet points work item</li>
                <li>bullet points work item</li>
                <li>bullet points work item</li>
                <li>bullet points work item</li>
                <li>bullet points work item</li>
            </ul>
        </div>

        </article>
  )
}

export default ExperienceCard