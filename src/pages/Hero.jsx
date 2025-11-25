import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import DecryptText from "../components/DecryptText";
import GooeyCursor from "../components/GooeyCursor";

function Hero() {

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen bg-white flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <GooeyCursor />
      {/* Social Media Icons - Left Edge (removed, will use SideElements component) */}

      {/* Main Content - Left Side */}
      <motion.div
        className="flex-1 max-w-2xl z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Greeting */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-gray-800 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Good day, I'm <span className="font-semibold">Tanmay Warthe</span>,
        </motion.h1>

        {/* Role - Red Color with DecryptText Animation */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-red-600 mb-4 min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <DecryptText
            values={[
              'A Full Stack Developer',
              'A Software Engineer',
              'I build things for the web',
              'A Problem Solver',
            ]}
            delay={3000}
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          A dedicated and disciplined Full Stack engineer who love to create things for internet, having more than 1 years of field experience I've delivered projects to many happy clients over globe.
        </motion.p>

        {/* Contact Button - Red */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Contact me!
          </Link>
        </motion.div>
      </motion.div>



      {/* Mobile Social Icons and Contact Button (handled by SideElements) */}
    </motion.section>
  );
}

export default Hero;
