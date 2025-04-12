import React from 'react';
import ContactCarousle from '../../Ui/ContactCarousle';

const Contact = () => {
  return (
    <div className="text-white overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center my-40">
        <h1 className="text-6xl max-lg:text-3xl font-bold text-white">
          Contact <span className="text-yellow-400">Us</span>
        </h1>
        <p className="mt-4 text-xl text-white">
          Home <span className="text-yellow-400">* Contact Us</span>
        </p>
      </div>

      <ContactCarousle />
    </div>
  );
};

export default Contact;
