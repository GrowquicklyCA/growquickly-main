"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "../../../hooks/use-toast"; // <-- shadcn toast import
import { Toaster } from "../../Ui/toaster";
import { sendContactEmail } from "@/lib/sendMail";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.message.trim()) errors.message = "Message is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const result = await sendContactEmail(formData);

      if (result.success) {
        toast({
          title: "Form Submitted!",
          description: "Your message was sent successfully.",
        });
        setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      } else {
        toast({
          title: "Submission Failed",
          description: "There was an error sending your message.",
        });
      }
    }
  };

  return (
    <div className="px-2">
      <Toaster />
      <motion.div
        className="max-w-6xl max-lg:w-auto max-lg:mx-0 max-lg:p-0 mx-auto p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center lg:text-left">
            Get <span className="text-[#8C52FF]">in touch</span> with Us
          </h2>
          <p className="mt-4 text-gray-600 text-center lg:text-left">
            We’d love to hear from you! Whether you have questions, need
            support, or want to discuss a project, feel free to reach out.
          </p>

          <div className="mt-10 space-y-6">
            <motion.div
              className="bg-[#8C52FF] text-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="flex items-center space-x-4">
                <Image
                  src="/icons/Vector (3).svg"
                  width={40}
                  height={40}
                  alt="Phone Icon"
                />
                <div>
                  <p className="font-medium text-xl">Phone Number</p>
                  <p className="mt-1 text-sm">+1 778 538 2109</p>
                </div>
              </div>
              <div className="hidden sm:block h-12 border-l border-white opacity-50"></div>

              <div className="flex items-center space-x-4">
                <Image
                  src="/icons/formkit_email.svg"
                  width={40}
                  height={40}
                  alt="Email Icon"
                />
                <div>
                  <p className="font-medium text-xl">Email Address</p>
                  <p className="mt-1 text-sm">Info@growquickly.ca</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 bg-[#48287A] text-white p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <FaMapMarkerAlt className="text-4xl sm:text-5xl" />
              <div>
                <p className="text-xl sm:text-2xl">Address</p>
                <p className="text-sm sm:text-base">Kamloops, BC, Canada</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-purple-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder={errors.firstName ? "First name is required" : "First name"}
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 ${errors.firstName ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
                }`}
            />

            <input
              name="lastName"
              type="text"
              placeholder={errors.lastName ? "Last name is required" : "Last name"}
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 ${errors.lastName ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
                }`}
            />

            <input
              name="phone"
              type="text"
              placeholder={errors.phone ? "Phone number is required" : "Phone No."}
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 sm:col-span-2 ${errors.phone ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
                }`}
            />

            <input
              name="email"
              type="email"
              placeholder={errors.email ? "Email is required" : "Email"}
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 sm:col-span-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
                }`}
            />

            <textarea
              name="message"
              rows={4}
              placeholder={errors.message ? "Message is required" : "Message"}
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 sm:col-span-2 ${errors.message ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
                }`}
            ></textarea>

            <div className="mt-6 text-center w-full sm:col-span-2">
              <motion.button
                className="bg-[#8C52FF] w-full text-white px-6 py-3 rounded-full shadow-md font-semibold hover:bg-purple-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
              >
                Submit message <span className="ml-2">→</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ContactSection;
