"use client"
import React from 'react'
import HeroSection from './AboutHero'
import AboutSection from './MissionAbout';
import OurApproach from './ApporochCards';
import Inovate from './invoate';
import Digitalap from './digital';
import CTAAbout from './CtaABout';
function AboutMain() {
  return (
    <div>
        
        <HeroSection/>
        <AboutSection/>
        <OurApproach/>
        <Inovate/>
        <Digitalap/>
        <CTAAbout/>
    </div>
  )
}

export default AboutMain;