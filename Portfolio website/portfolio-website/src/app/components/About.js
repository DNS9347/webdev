import react from "react";

export default function About() {
    return (
      <section id="about" className="py-[180px] bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <img src="/Images/APPlication_pic.jpg" className="w-[180px] h-[180px] rounded-full mx-auto shadow-sm z-3"/>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg pt-2">I’m a passionate Frontend Developer and Electrical Engineer with a focus on building efficient and visually appealing applications.</p>
            <p className="mt-4">I have experience in React, Next.js, and Node.js, and I'm eager to work in the Electric Vehicle domain while continuously learning DevOps practices.</p>
          </div>
        </div>
      </section>
    );
  }
  