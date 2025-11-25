import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function About() {
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const pillars = [
    {
      title: "Craft with clarity",
      copy: "I translate fuzzy ideas into crisp user journeys backed by accessible UI and maintainable code.",
    },
    {
      title: "Ship with intent",
      copy: "Small experiments + tight feedback loops keep projects moving without losing polish.",
    },
    {
      title: "Grow with community",
      copy: "Learning in public and mentoring juniors keeps me curious, humble, and plugged into real-world problems.",
    },
  ];

  const toolkit = [
    "React & Next.js",
    "TypeScript",
    "Node / Express",
    "Supabase & Firebase",
    "Tailwind",
    "Framer Motion",
    "REST & GraphQL",
    "CI/CD",
  ];

  return (
    <motion.section
      id="about"
      className="relative isolate bg-gray-50 py-20 sm:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-red-300/30 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-red-500/20 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 space-y-12 text-gray-800">
        <motion.div variants={heroVariants} className="text-center space-y-4">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-red-700 bg-red-100 rounded-full inline-block">
            Story • Craft • Values
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Intentional products built with heart and a little caffeine
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-600">
            I blend design sensitivity with engineering rigour to help founders, startups, and teams ship experiences
            that feel calm, fast, and unforgettable.
          </p>
        </motion.div>

        <motion.div
          variants={heroVariants}
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center"
        >
          <div className="space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 border border-red-100 shadow-[0_10px_50px_rgba(220,38,38,0.08)] backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 h-10 w-10 rounded-2xl bg-red-100 text-red-700 font-semibold flex items-center justify-center">
                  TW
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Hi, I'm Tanmay 👋</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I'm a full-stack developer obsessed with building expressive front-ends and resilient back-ends. My
                    background spans freelancing with ambitious founders, working with small SaaS teams, and stewarding
                    design systems that keep multi-platform products consistent.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Whether it's a healthcare MVP or an internal tool, I lead with research, sweat the micro-interactions,
                    and obsess over developer experience so teams can iterate faster with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-gray-200/70 bg-white/70 p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-red-500 mb-2">{pillar.title}</p>
                  <p className="text-sm sm:text-base text-gray-600">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-4 rounded-[30px] bg-gradient-to-br from-red-100 via-transparent to-red-200 blur-3xl -z-10" />
            <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl">
              <div className="p-5 sm:p-6">
                <div className="aspect-square w-full max-w-[280px] sm:max-w-[320px] mx-auto overflow-hidden rounded-[26px] border border-red-100">
                  <img
                    src={profileImg}
                    alt="Tanmay Warthe portrait"
                    loading="lazy"
                    className="h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="mt-6 text-center space-y-1.5">
                  <p className="text-xs uppercase tracking-[0.35em] text-red-500">Tanmay Warthe</p>
                  <p className="text-sm text-gray-500">Full-stack developer · Product-minded engineer</p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-2xl border border-red-100 bg-red-50/60 py-3">
                    <p className="text-xs uppercase tracking-wider text-red-500">Focus</p>
                    <p className="text-base font-semibold text-gray-800">Craft + Speed</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 py-3">
                    <p className="text-xs uppercase tracking-wider text-gray-400">Based in</p>
                    <p className="text-base font-semibold text-gray-800">India (remote)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* <motion.div variants={heroVariants} className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">Toolbox</p>
            <span className="text-xs text-gray-500">Favorite stack for fast, scalable shipping</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {toolkit.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full border border-gray-200 bg-white/80 text-sm text-gray-700 shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div> */}

        {/* <motion.div
          variants={heroVariants}
          className="rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-red-100/60 p-6 sm:p-10 text-center"
        >
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Currently open to collaborations, contract roles, and long-term product partnerships. I love joining teams at
            inflection points—when you need momentum, calm execution, and someone who can talk user flows and database
            indexes in the same breath.
          </p>
        </motion.div> */}
      </div>
    </motion.section>
  );
}
