import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function About() {
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const pillars = [
    {
      title: "Craft with clarity",
      copy: "I translate fuzzy ideas into crisp user journeys backed by accessible UI and maintainable code.",
    },
    // {
    //   title: "Ship with intent",
    //   copy: "Small experiments + tight feedback loops keep projects moving without losing polish.",
    // },
    {
      title: "Grow with community",
      copy: "Learning in public and mentoring juniors keeps me curious, humble, and plugged into real-world problems.",
    },
  ];

  return (
    <motion.section
      id="about"
      className="relative isolate bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div variants={heroVariants} className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
            Story • Craft • Values
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Intentional products built with heart and a little caffeine
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I blend design sensitivity with engineering rigour to help founders, startups, and teams ship experiences
            that feel calm, fast, and unforgettable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Content */}
          <motion.div variants={heroVariants} className="lg:col-span-7 space-y-10">
            {/* Intro */}
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <h3 className="text-2xl font-bold text-gray-900">Hi, I'm Tanmay 👋</h3>
              <p>
                I'm a full-stack developer obsessed with building expressive front-ends and resilient back-ends. My
                background spans freelancing with ambitious founders, working with small SaaS teams, and stewarding
                design systems that keep multi-platform products consistent.
              </p>
              <p>
                Whether it's a healthcare MVP or an internal tool, I lead with research, sweat the micro-interactions,
                and obsess over developer experience so teams can iterate faster with confidence.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3 group-hover:text-red-600 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Fluid Image & Stats */}
          <motion.div variants={heroVariants} className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm">
              {/* Fluid Shape Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-100 to-transparent rounded-full blur-3xl -z-10" />

              <div className="relative flex flex-col items-center text-center bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/50 shadow-xl shadow-red-900/5">
                {/* Fluid Image Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 group">
                  <img
                    src={profileImg}
                    alt="Tanmay Warthe"
                    className="w-full h-full object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg group-hover:rounded-[50%] transition-all duration-700 ease-in-out"
                  />
                  {/* Decorative ring */}
                  <div className="absolute inset-0 border-2 border-red-500/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] scale-110 -z-10 group-hover:rounded-[50%] transition-all duration-700 ease-in-out" />
                </div>

                <div className="space-y-1 mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Tanmay Warthe</h3>
                  <p className="text-sm text-gray-500 font-medium">Full-stack developer</p>
                </div>

                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="p-3 rounded-2xl bg-red-50/50 border border-red-100">
                    <p className="text-[10px] uppercase tracking-wider text-red-600 font-bold">Focus</p>
                    <p className="text-sm font-semibold text-gray-900">Craft + Speed</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Location</p>
                    <p className="text-sm font-semibold text-gray-900">India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
