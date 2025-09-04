import React, { Suspense, lazy } from "react";


// Components
import Navbar from "./components/Navbar";
const Footer = lazy(() => import("./components/Footer"));

// Pages (lazy-load heavy sections)
import Hero from "./pages/Hero";
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Skills = lazy(() => import("./pages/Skills"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <div className="bg-[#0F172A] text-[#E2E8F0] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 relative bg-tech-gradient tech-grid">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Me Section */}
        <section id="about" className="py-8 sm:py-12 lg:py-16">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <About />
          </Suspense>
        </section>

        {/* Education Section */}
        <section id="education" className="py-8 sm:py-12 lg:py-16">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <Education />
          </Suspense>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-8 sm:py-12 lg:py-16">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <Experience />
          </Suspense>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-8 sm:py-12 lg:py-16">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <Skills />
          </Suspense>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8 sm:py-12 lg:py-16">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-40 animate-pulse rounded-2xl bg-[#0B1220] border border-[#111827]" /></div>}>
            <Projects />
          </Suspense>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 sm:py-12 lg:py-16">
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
