import react from "react";

export default function Projects() {
    const projects = [
      {
        title: 'CRM with Next.js',
        description: 'A full CRM system with Next.js and Swagger API integration.',
      },
      {
        title: 'Java ATM application',
        description: 'Integration of ATM interface with logic.',
      },
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  