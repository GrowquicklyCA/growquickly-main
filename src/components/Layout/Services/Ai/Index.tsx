"use client";
import React from 'react'
import AiHome from './MainAi'
import AISolutionsSection from './Aidigital'
import AiProcessSection from './Aiproces'
import FAQSection from '../DigitalMarkting/FAQ'
import CTAServices from '../CtaServices'

function Ai() {
  return (
    <div>
      <AiHome/>
      <AISolutionsSection/>
      <AiProcessSection/>
      <FAQSection/>
      <CTAServices/>
    </div>
  )
}

export default Ai
