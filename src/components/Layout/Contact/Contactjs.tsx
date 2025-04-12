import React from "react";
// import Nav from './Nav';
import Contact from "./Contact";
import ContactSection from "./Contactform";
function Contactus() {
  return (
    <div>
      <div className="relative bg-[#8C52FF] border-white border-2 m-0 p-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/bgcontact.png')" }}
        ></div>

        <div className="relative">
          <Contact />
        </div>
      </div>
      <ContactSection />
    </div>
  );
}

export default Contactus;
