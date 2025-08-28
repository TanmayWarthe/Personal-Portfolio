import React from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

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

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
