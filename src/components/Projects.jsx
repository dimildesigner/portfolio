import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Projetos em destaque
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}