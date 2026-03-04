"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen pt-12 pb-20 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-glass-accent border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-12 pb-20 px-6 md:px-12 lg:px-24">
      <header className="mb-12 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat tracking-tight font-bold text-white mb-6">
          Apex Solutions
        </h1>
        <p className="text-[#8b9bb4] tracking-[0.3em] font-sans text-sm md:text-[15px] uppercase">
          Hardware Rentals
        </p>
      </header>

      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || project._id}
              project={project}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
