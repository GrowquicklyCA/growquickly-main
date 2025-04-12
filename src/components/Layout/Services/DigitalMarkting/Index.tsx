import React from "react";
import Home from "./Home";
import Ourdigital from "./Ourdigital";
import ProcessSection from "./Process";
import FAQSection   from "./FAQ";
import CTAServices from '../CtaServices'
function Digital() {
  return (
    <div>
      <Home />
      <Ourdigital/>
      <ProcessSection/>
      <FAQSection/>
      <CTAServices/>
    </div>
  );
}

export default Digital;
