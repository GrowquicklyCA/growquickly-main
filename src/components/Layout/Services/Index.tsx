"use client"

import React from 'react'
import OURServices from './ourservice'
import ServicesCard from './Servicescards'
import WhyChooseUs from './Stserv'
import CTAServices from './CtaServices'
function ServicesIndex() {
  return (
    <div>
        <OURServices/>
        <ServicesCard/>
        <WhyChooseUs/>
        <CTAServices/>
    </div>
  )
}

export default ServicesIndex