
import react from "react";


export default function Hero() {
    return (
      <section className="h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
        <div className=" flex flex-col text-center text-white py-8">
          <h2 className="text-6xl font-extrabold">Hello, I'm Your  DEPURI NAVEEN</h2>
          <p className="mt-4 text-xl">Frontend Developer | Electrical Engineer</p>
          <div className="mt-10">
            <a href="#contact" className="px-8 py-3 bg-white hover:bg-rose-200 border-2 text-blue-600 rounded-full font-bold mr-4">Contact Me</a>
            <a href="/resume-soft.pdf" className="px-8 py-3 bg-purple-600 hover:border-2   text-white rounded-full">View Resume</a>
          </div>
        </div>
      </section>
    );
  }
  