import React, { Suspense, lazy } from "react";
import { Github, Instagram, Twitter, Linkedin } from "lucide-react";

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
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Side Elements (Social Icons & Email) */}
      <SideElements
        email="tanmaywarthe02@gmail.com"
        socialLinks={[
          { icon: Github, href: 'https://github.com/TanmayWarthe', label: 'GitHub' },
          { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
          { icon: Twitter, href: 'https://x.com/_tanmay_warthe', label: 'Twitter' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/tanmay-warthe/', label: 'LinkedIn' },
        ]}
        onIconClick={(label) => console.log(`Clicked ${label}`)}
        onEmailClick={() => window.location.href = 'mailto:tanmaywarthe02@gmail.com'}
      />

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Me Section */}
        <section id="about" className="py-2 sm:py-3">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <About />
          </Suspense>
        </section>

        {/* Education Section */}
        <section id="education" className="py-2 sm:py-3">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <Education />
          </Suspense>
        </section>


        {/* Experience Section */}
        <section id="experience" className="py-2 sm:py-3">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <Experience />
          </Suspense>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-2 sm:py-3">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <Skills />
          </Suspense>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-2 sm:py-3">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <Projects />
          </Suspense>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-2 sm:py-3">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <Certificates />
          </Suspense>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-2 sm:py-3">
          <Suspense fallback={<div className="max-w-3xl mx-auto px-4 sm:px-6"><div className="h-32 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <Contact />
          </Suspense>
        </section>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="h-16" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
