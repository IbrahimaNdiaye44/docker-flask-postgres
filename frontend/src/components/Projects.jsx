import React from "react";

const projects = [
  {
    title: "6G Digital Twin Optimization",
    description: "Developing AI-driven Digital Twin models for 6G networks.",
  },
  {
    title: "UWAODV Underwater Communication",
    description: "A novel networking protocol for underwater multi-hop communication.",
  },
  {
    title: "Discount Food Search Engine",
    description: "A web-based platform to find discount food offers using AI.",
  },
];

const Projects = () => {
  return (
<<<<<<< HEAD
    <div className="p-10 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
=======
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
>>>>>>> 27dccbc (Update: Improved UI, sidebar nav, smooth scroll, and Docker setup)
  );
};

export default Projects;
