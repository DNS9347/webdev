import react from "react";
import { Mail , GitBranchIcon, LucideUnlockKeyhole } from 'lucide-react'; 

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm pb-3">&copy; 2024 Depuri Naveen. All rights reserved.</p>

        <hr></hr>
        <div className="flex flex-row items-center justify-around pt-8">

        <div className="flex flex-row items-center space-x-2">
        <Mail size={20} />  
          <p>Naveensiddart667@gmail.com</p>
        </div>
        <div className="flex flex-row items-center space-x-2">
        <LucideUnlockKeyhole size={20} />
          <a href="https://www.linkedin.com/in/depuri-naveen">Linkdein</a>
        </div>
        <div className="flex flex-row items-center space-x-2">
        <GitBranchIcon size={20} />
          <a a href="https://github.com/DNS9347"  target="_blank" rel="noopener noreferrer">github</a>
        </div>

        </div>
      </footer>
    );
  }
  