import React, { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Welcome() {
  useEffect(() => {
    // Trigger confetti when the component mounts
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
    });

    // Optionally trigger multiple confetti bursts
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ["#bb0000", "#ffffff", "#ffa500", "#008000", "#00bfff", "#ff69b4"];

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        particleCount,
        startVelocity: 30,
        ticks: 60,
        spread: 360,
        colors: colors,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    }, 250);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800">Welcome, Recruiter!</h1>
      <p className="text-lg mt-4 text-gray-600">Thank you for visiting my portfolio. Enjoy exploring my projects!</p>
    </div>
  );
}
