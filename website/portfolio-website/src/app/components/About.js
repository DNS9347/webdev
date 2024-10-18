import react from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function About() {


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

  return (
    <section id="about" className="py-[180px] bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <img src="/Images/APPlication_pic.jpg" className="w-[180px] h-[180px] rounded-full mx-auto shadow-sm z-3" />
        < motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p
            className="text-medium pt-2"
            variants={itemVariants}
          > I am a passionate and versatile developer with a strong foundation in React,
            Next.js, Python, and JavaScript, driven by a continuous desire to learn and improve.
            With solid project experience in creating dynamic front-end applications, CRM systems,
            and more, I blend creativity with technical expertise to deliver clean, efficient,
            and user-focused solutions.</p>
          <p className=" text-medium mt-4" variants={itemVariants}> Having completed my degree in Electrical and Electronics Engineering, I’ve extended
            my skill set into software development, with hands-on knowledge of Node.js, Spring Boot,
            and backend integration. I thrive on problem-solving and am dedicated to crafting
            innovative solutions that drive business success.</p>

          <p className=" text-medium mt-4" variants={itemVariants}> Looking toward the future, I aspire to leverage my skills and experience to begin
            my own startup. This vision motivates me to continuously push boundaries, learn
            emerging technologies like DevOps, and build scalable solutions that address real-world problems.</p>

          <p className=" text-medium mt-4" variants={itemVariants}> Whether working independently or as part of a team, I remain committed to delivering
            high-quality work that aligns with both user needs and modern tech trends, always
            with an eye on the future.</p>
        </motion.div>
      </div>
    </section>
  );
}
