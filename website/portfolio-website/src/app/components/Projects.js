"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projects = [
    {
      title: "CRM with Next.js",
      description: "A full CRM system with Next.js and Swagger API integration.",
    },
    {
      title: "Java ATM application",
      description: "Integration of ATM interface with logic.",
    },
    {
      title: "Food Pickle Sale Platform",
      description: "A beautiful UI for a food pickle sale platform with a strong payment gateway.",
    },
    {
      title: "Lead Management Dashboard",
      description: "A dashboard displaying lead statuses and charts using React and Chart.js.",
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="relative max-w-3xl mx-auto ">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.title} className="w-full flex-shrink-0 m-2">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={prevProject}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={nextProject}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full p-0 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}