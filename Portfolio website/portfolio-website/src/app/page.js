'use client';
import react, { useEffect, useState } from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Welcome from './components/welcome';

export default function Home() {

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect (() => {

    const timer = setTimeout(() => {

      setShowWelcome(false);

    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {/* <Header /> */}
      {showWelcome ? (<Welcome />) :

        (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            {/* <Footer /> */}
          </>
        )}
    </>
  );
}
