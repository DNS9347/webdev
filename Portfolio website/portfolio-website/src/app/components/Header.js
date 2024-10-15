'use client';
import react , {useState} from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-gradient-to-r from-rose-200 to-gray-200 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav
         className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-rose-50 p-2  font-medium rounded-lg shadow-md md:static md:w-[500px] md:flex md:items-center md:justify-around`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li><Link href="#Hero" onClick={closeMenu}>Home</Link></li>
            <li><Link href="#about"  onClick={closeMenu}>About</Link></li>
            <li><Link href="#skills"  onClick={closeMenu}>Skills</Link></li>
            <li><Link href="#projects"  onClick={closeMenu}>Projects</Link></li>
            <li><Link href="#contact"  onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
