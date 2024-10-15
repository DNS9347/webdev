'use client';
import react from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
