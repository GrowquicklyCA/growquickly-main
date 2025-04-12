"use client";

import { motion } from "framer-motion";
import Header from "../components/Layout/Header";
import Hero from "../components/Layout/Hero";
import Services from "../components/Layout/Services";
import Features from "../components/Layout/Features";
import CTA from "../components/Layout/CTA";
import Testimonials from "../components/Layout/Testimonials";
import Footer from "../components/Layout/Footer";
import { DashboardLayout } from "@/components/Ui/Chatbot/ChatbotDashboard";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-white"
    >
      <DashboardLayout>

      <Header />
      <Hero />
      <Services />
      <Features />
      <CTA />
      <Testimonials />
      <Footer />


        {/* Add your content here */}
        {/* <div>Your content goes here</div> */}
      </DashboardLayout>
    </motion.div>
  );
}
