import React, { Suspense, lazy, useEffect, useRef } from "react";
import { Github, Instagram, Twitter, Linkedin } from "lucide-react";
import Lenis from "lenis";

// Components
import Navbar from "./components/Navbar";
import SideElements from "./components/SideElements";
const Footer = lazy(() => import("./components/Footer"));

// Pages (lazy-load heavy sections)
import Hero from "./pages/Hero";
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Skills = lazy(() => import("./pages/Skills"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scroll with optimized settings
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
      syncTouch: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose lenis to window for react-scroll integration
    window.lenis = lenis;

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Side Elements (Social Icons & Email) */}
      <SideElements
        email="tanmaywarthe02@gmail.com"
        socialLinks={[
          { icon: Github, href: 'https://github.com/TanmayWarthe', label: 'GitHub' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/tanmay-warthe/', label: 'LinkedIn' },
          { icon: Twitter, href: 'https://x.com/_tanmay_warthe', label: 'Twitter' },
          { icon: Instagram, href: 'https://instagram.com/_tanmaaay', label: 'Instagram' },
        ]}
        onIconClick={(label) => console.log(`Clicked ${label}`)}
        onEmailClick={() => window.location.href = 'mailto:tanmaywarthe02@gmail.com'}
      />

      {/* Main Content - Single Continuous Flow */}
      <main className="flex-1 relative">
        {/* Hero Section */}
        <div id="hero">
          <Hero />
        </div>

        {/* About Me Section */}
        <div id="about">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-gray-100" /></div>}>
            <About />
          </Suspense>
        </div>

        {/* Education Section */}
        <div id="education">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-gray-100" /></div>}>
            <Education />
          </Suspense>
        </div>


        {/* Experience Section */}
        <div id="experience">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-gray-100" /></div>}>
            <Experience />
          </Suspense>
        </div>

        {/* Skills Section */}
        <div id="skills">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-gray-100" /></div>}>
            <Skills />
          </Suspense>
        </div>

        {/* Projects Section */}
        <div id="projects">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-gray-100" /></div>}>
            <Projects />
          </Suspense>
        </div>

        {/* Certificates Section
        <div id="certificates">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-gray-100" /></div>}>
            <Certificates />
          </Suspense>
        </div> */}

        {/* Contact Section */}
        <div id="contact">
          <Suspense fallback={<div className="max-w-3xl mx-auto px-4 sm:px-6"><div className="h-32 animate-pulse rounded-2xl bg-gray-100" /></div>}>
            <Contact />
          </Suspense>
        </div>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="h-16" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
