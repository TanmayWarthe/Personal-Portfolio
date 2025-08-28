import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 space-y-6">
      <div className="pt-2 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-[#93C5FD] via-[#38BDF8] to-[#22D3EE] bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8] to-[#06B6D4] shadow-[0_0_16px_rgba(56,189,248,0.55)]" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard title="Portfolio" description="This site built with React + Vite + Tailwind." tags={["Vite","React","Tailwind"]} />
        <ProjectCard title="AI Tool" description="Experiment integrating AI features into web apps." tags={["AI","OpenAI","UX"]} />
        <ProjectCard title="Open Source" description="Contributions and small utilities." tags={["GitHub","CLI","Node"]} />
      </div>
    </div>
  );
}


