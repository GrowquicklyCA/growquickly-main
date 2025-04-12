import React from 'react'
import SEOPage from './Seohome'
import FAQSection from '../DigitalMarkting/FAQ'
import CTAServices from '../CtaServices'
import ProcessSectionSeo from './SeoProcess'
import SEOServicesSection from './SeoMain'

function SEO() {
  return (
    <div>
      <SEOPage/>
      <SEOServicesSection/>
      <ProcessSectionSeo/>
      <FAQSection/>
      <CTAServices/>
    </div>
  )
}

export default SEO
