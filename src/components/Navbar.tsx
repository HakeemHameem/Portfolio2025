
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="py-8 flex justify-between items-center">
      <Link to="/" className="text-2xl font-mono font-bold hover:text-accent">HameemDev</Link>
      
      <div className="flex items-center space-x-6">
        <Link to="/projects" className="hover:text-accent text-muted-foreground">Projects</Link>
        <Link to="/about" className="hover:text-accent text-muted-foreground">About</Link>
      </div>

      <div className="flex items-center space-x-4">
        <a href="https://github.com/HakeemHameem" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/hameem1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
          <Linkedin size={20} />
        </a>
        <a href="mailto:hakeemhameem7@gmail.com" className="text-muted-foreground hover:text-accent">
          <Mail size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
