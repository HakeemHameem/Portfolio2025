
import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6">
      <Navbar />
      
      <main>
        <section className="py-12">
          <h1 className="text-3xl font-bold font-mono mb-8">Contact</h1>
          
          <p className="text-muted-foreground mb-8">
            I'm currently open to new opportunities and collaborations. Feel free to reach out using any of the methods below.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-4 text-accent" />
              <a href="mailto:contact@example.com" className="text-foreground hover:text-accent">
                contact@hakeemhameem7@gmail.com
              </a>
            </div>
            
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-4 text-accent" />
              <span className="text-foreground">+91 (700) 638-5519</span>
            </div>
            
            <div className="flex items-center">
              <Github className="w-5 h-5 mr-4 text-accent" />
              <a 
                href="https://github.com/HakeemHameem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent"
              >
                github.com/hameemdev
              </a>
            </div>
            
            <div className="flex items-center">
              <Linkedin className="w-5 h-5 mr-4 text-accent" />
              <a 
                href="www.linkedin.com/in/hameem1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent"
              >
                linkedin.com/in/hameemdev
              </a>
            </div>
          </div>
          
          <div className="mt-12 p-6 border border-muted rounded-md">
            <h2 className="text-xl font-medium mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 bg-secondary text-foreground rounded-md"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 bg-secondary text-foreground rounded-md"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-2 bg-secondary text-foreground rounded-md"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
