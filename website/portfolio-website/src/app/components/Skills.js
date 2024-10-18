import react from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

export default function Skills() {


  const containerVariants = {
    hidden: { opacity: 0, y: 100 }, // Start off-screen and hidden
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        delay: 0.2,
        staggerChildren: 0.3, // Stagger the appearance of each skill
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skills = [
    {
      title: 'React',
      icon: '/images/icons/createreactapp.jpg'
    },
    {
      title: 'Next.js',
      icon: '/images/icons/nextdotjs.jpg'
    },
    {
      title: 'Node.js',
      icon: '/images/icons/nodedotjs.jpg'
    },
    {
      title: 'Python',
      icon: '/images/icons/python.jpg'
    },
    {
      title: 'JavaScript',
      icon: '/images/icons/javascript.jpg'
    },
    {
      title: 'Tailwind CSS',
      icon: '/images/icons/tailwindcss.jpg'
    },

  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <motion.div

          className="grid grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of section is in view
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              className="flex flex-row items-center bg-gray-100 p-6 rounded-lg shadow-lg"
              variants={itemVariants} // Each skill will animate in with a staggered delay
            >
              <img src={skill.icon} className="w-8 h-8 mr-4" />
              <p>{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section >
  );
}
