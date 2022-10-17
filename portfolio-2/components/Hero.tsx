import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import EmilioHero from "../images/HotWobble-2.jpg"


type Props = {}

function Hero({}: Props) {
const [text, count] = useTypewriter({
    words: ["My name is Emilio.", "Musician", "Developer", "Video Producer"],
    loop: true,
    delaySpeed: 2000
    
})

  return (

    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            
    <BackgroundCircles />
    {/* figure out why I can't get the rounded class to work here */}
          <div className="relative w-80 h-80 mx-auto object-cover">
            <Image src={EmilioHero} alt="picture of emilio" layout="fill" />
          </div>
           
          
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#9A21C6'/>
        </h1>
    
    </div>

    
  )
}

export default Hero