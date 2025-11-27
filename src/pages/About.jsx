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
      title: "Full Stack Development (MERN)",
      copy: "Creating end-to-end web solutions using MongoDB, Express.js, React.js, and Node.js to build responsive, scalable applications.",
    },
    {
      title: "Cloud Computing & DevOps",
      copy: "Designing and deploying reliable, automated systems using AWS, Docker, and modern DevOps practices for efficient infrastructure.",
    },
    {
      title: "AI/ML Integration",
      copy: "Bringing intelligence into practical projects by integrating AI-powered features to create innovative, impactful software solutions.",
    },
  ];

  return (
    <motion.section
      id="about"
      className="relative isolate bg-gradient-to-b from-gray-50/50 via-white to-white py-20 sm:py-24 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 translate-x-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-20 left-0 -translate-x-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 animate-float" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div variants={heroVariants} className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-red-300" />
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100 shadow-sm">
              Story • Craft • Values
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-red-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Building scalable solutions with <span className="text-red-600">passion</span> and <span className="text-blue-600">precision</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm passionate about creating high-performance applications, exploring cloud computing, and integrating AI-powered features into practical projects to build impactful software solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Content */}
          <motion.div variants={heroVariants} className="lg:col-span-7 space-y-10">
            {/* Intro */}
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <h3 className="text-2xl font-bold text-gray-900">Hi, I'm Tanmay 👋</h3>
              <p>
                I'm a Computer Technology student at Yeshwantrao Chavan College of Engineering, Nagpur, with a diploma in Computer Technology from Government Polytechnic Bramhapuri. I'm passionate about building scalable, high-performance applications, exploring Cloud & DevOps, and integrating AI-powered features into real-world solutions.
              </p>
              <p>
                I'm interested in Software Development, where I can combine my coding skills, problem-solving mindset, and passion for clean architecture to build impactful solutions. I'm actively learning tools and technologies like AWS, Git, GitHub, Docker, and Python, while working on personal projects to sharpen my skills.
              </p>
              <p>
                My goal is to build a strong career as a Software Developer while expanding into DevOps and Cloud Engineering, continuously learning and contributing to innovative projects.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  className="relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300 group overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/50 group-hover:to-transparent transition-all duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3 group-hover:text-red-600 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{pillar.copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Fluid Image & Stats */}
          <motion.div variants={heroVariants} className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm">
              {/* Fluid Shape Background Glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-200 via-red-100 to-yellow-100 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative flex flex-col items-center text-center bg-white/70 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/80 shadow-2xl shadow-red-900/10 hover:shadow-red-900/20 transition-shadow duration-500">
                {/* Fluid Image Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 group">
                  <img
                    src={profileImg}
                    alt="Tanmay Warthe"
                    className="w-full h-full object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg group-hover:rounded-[50%] transition-all duration-700 ease-in-out"
                  />
                  {/* Decorative ring */}
                  <div className="absolute inset-0 border-2 border-red-500/20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] scale-110 -z-10 group-hover:rounded-[50%] group-hover:border-red-500/40 transition-all duration-700 ease-in-out" />
                </div>

                <div className="space-y-1 mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Tanmay Warthe</h3>
                  <p className="text-sm text-gray-500 font-medium">Computer Technology Student</p>
                </div>

                <div className="grid grid-cols-2 gap-3 w-full">
                  <motion.div
                    className="p-3 rounded-2xl bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 hover:border-red-300 transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-[10px] uppercase tracking-wider text-red-600 font-bold">Focus</p>
                    <p className="text-sm font-semibold text-gray-900">MERN + Cloud</p>
                  </motion.div>
                  <motion.div
                    className="p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Location</p>
                    <p className="text-sm font-semibold text-gray-900">Nagpur, India</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
