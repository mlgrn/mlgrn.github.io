import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"


type Props = {}

function Header({}: Props) {
  return (
  
        
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7 xl mx-auto z-20 xl:items-center">
          <motion.div 
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}

          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration: 1
          }}
          className="flex flex-row items-center">
            <SocialIcon url='https://www.linkedin.com/in/emilio-guarino-99183a1b1/' fgColor="grey" bgColor="transparent"> </SocialIcon>
            <SocialIcon url='https://github.com/mlgrn'fgColor="grey" bgColor="transparent"> </SocialIcon>
            <SocialIcon url='https://youtube.com/'fgColor="grey" bgColor="transparent"> </SocialIcon>
          </motion.div>

          <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}

          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration: 1
          }}
          >
            
          <SocialIcon 
          className='cursor-pointer'
          network="email"
          fgColor='grey'
          bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>email me here</p>
          </motion.div>
        </header>

  
  )
}

export default Header