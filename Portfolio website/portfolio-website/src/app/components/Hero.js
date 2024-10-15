
import react from "react";

export default function Hero() {
    return (
      <section className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-6xl font-extrabold">Hello, I'm Your Name</h2>
          <p className="mt-4 text-xl">Frontend Developer | Electrical Engineer</p>
          <div className="mt-6">
            <a href="#contact" className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold mr-4">Contact Me</a>
            <a href="/resume.pdf" className="px-8 py-3 bg-purple-600 text-white rounded-full">View Resume</a>
          </div>
        </div>
      </section>
    );
  }
  