
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 mt-16 border-t border-muted">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HameemDev. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="https://github.com/HakeemHameem" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/hameem1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
            <Linkedin size={18} />
          </a>
          <a href="mailto:hakeemhameem7@gamil.com" className="text-muted-foreground hover:text-accent">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
