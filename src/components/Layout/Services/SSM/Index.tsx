import React from 'react'
import Hero from './Hero'
import SocialMediaSection from './Mainpage'
import SocialMediaProcessSection from './Process'
import FAQSection from '../DigitalMarkting/FAQ'
import CTAServices from '../CtaServices'

function Social() {
  return (
    <div>
      <Hero/>
      <SocialMediaSection/>
      <SocialMediaProcessSection/>
            <FAQSection/>
      <CTAServices/>

      
    </div>
  )
}

export default Social
