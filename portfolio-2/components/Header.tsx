import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
  return (
    <div className="flex flex-row items-center">
        
        <header>
          <div>
            <SocialIcon url='https://www.linkedin.com/in/emilio-guarino-99183a1b1/' fgColor="grey" bgColor="transparent"> </SocialIcon>
            <SocialIcon url='https://github.com/mlgrn'fgColor="grey" bgColor="transparent"> </SocialIcon>
            <SocialIcon url='https://youtube.com/'fgColor="grey" bgColor="transparent"> </SocialIcon>
          </div>
          

          <div>
            
          <SocialIcon 
          className='cursor-pointer'
          network="email"
          fgColor='grey'
          bgColor='transparent'/>
          <p>email me here</p>
          </div>
        </header>

    </div>
  )
}

export default Header