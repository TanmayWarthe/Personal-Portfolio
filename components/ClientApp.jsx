"use client";

import React, { Suspense, lazy, useEffect, useRef } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

// Components
import Navbar from "@/components/Navbar";
import SideElements from "@/components/SideElements";
import SideElementsMobileIcons from "@/components/SideElementsMobileIcons";
import { FireBall } from "@/components/ui/FireBall";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterXIcon,
  LeetCodeIcon,
} from "@/components/SocialIcons";

// Pages (lazy-load heavy sections)
import Hero from "@/components/pages/Hero";
const About = lazy(() => import("@/components/pages/About"));
const Education = lazy(() => import("@/components/pages/Education"));
const Certificates = lazy(() => import("@/components/pages/Certificates"));
const Skills = lazy(() => import("@/components/pages/Skills"));
const Experience = lazy(() => import("@/components/pages/Experience"));
const Projects = lazy(() => import("@/components/pages/Projects"));
const Contact = lazy(() => import("@/components/pages/Contact"));

const SOCIAL_LINKS = [
  { icon: GithubIcon, href: "https://github.com/TanmayWarthe", label: "GitHub", isCustom: true },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/tanmay-warthe/", label: "LinkedIn", isCustom: true },
  { icon: LeetCodeIcon, href: "https://leetcode.com/u/_tanmaaay/", label: "LeetCode", isCustom: true },
  { icon: TwitterXIcon, href: "https://x.com/_tanmay_warthe", label: "Twitter", isCustom: true },
  { icon: InstagramIcon, href: "https://instagram.com/_tanmaaay", label: "Instagram", isCustom: true },
];

export default function ClientApp() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
      lerp: 0.08,
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    document.documentElement.classList.add("lenis", "lenis-smooth");

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    window.lenis = lenis;

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        if (element) {
          lenis.scrollTo(element, {
            offset: -80,
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          window.dispatchEvent(new Event("scroll"));
          ticking = false;
        });
        ticking = true;
      }
    };
    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
      lenis.destroy();
      window.lenis = null;
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
    >
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">
        <FireBall
          particleColors={["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"]}
          particleOpacity={0.85}
          background="transparent"
          particleRadiusRange={[1, 3]}
          maxParticles={100}
          particlesPerBurst={6}
          maxBurstsPerSecond={15}
          particleLifeRange={[200, 400]}
          speedRange={[0.3, 1.2]}
          drift={0.08}
          gravity={0.02}
          decay={0.92}
          cursorSize={16}
          cursorOutlineWidth={2}
          cursorOutlineColor="rgba(59, 130, 246, 0.8)"
          cursorShadowBlur={8}
          cursorShadowColor="rgba(59, 130, 246, 0.4)"
          fullScreen={true}
          style={{ zIndex: 9999, pointerEvents: "none" }}
        />

        <Navbar />

        <SideElements
          email="tanmaywarthe02@gmail.com"
          socialLinks={SOCIAL_LINKS}
          onIconClick={(label) => console.log(`Clicked ${label}`)}
          onEmailClick={() => (window.location.href = "mailto:tanmaywarthe02@gmail.com")}
        />

        <main className="flex-1 relative">
          <div id="hero"><Hero /></div>

          <div id="about">
            <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-gray-100" /></div>}>
              <About />
            </Suspense>
          </div>

          <div id="education">
            <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-gray-100" /></div>}>
              <Education />
            </Suspense>
          </div>

          <div id="experience">
            <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-gray-100" /></div>}>
              <Experience />
            </Suspense>
          </div>

          <div id="skills">
            <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-gray-100" /></div>}>
              <Skills />
            </Suspense>
          </div>

          <div id="projects">
            <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-gray-100" /></div>}>
              <Projects />
            </Suspense>
          </div>

          <div id="contact">
            <Suspense fallback={<div className="max-w-3xl mx-auto px-4 sm:px-6"><div className="h-32 animate-pulse rounded-2xl bg-gray-100" /></div>}>
              <Contact />
            </Suspense>
          </div>

          <SideElementsMobileIcons
            socialLinks={SOCIAL_LINKS}
            onIconClick={(label) => console.log(`Clicked ${label}`)}
          />
        </main>
      </div>
    </MotionConfig>
  );
}
