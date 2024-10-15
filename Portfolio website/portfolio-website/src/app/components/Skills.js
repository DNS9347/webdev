import react from "react";

export default function Skills() {
    const skills = ['React', 'Next.js', 'Node.js', 'Python', 'JavaScript', 'Tailwind CSS'];
  
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  