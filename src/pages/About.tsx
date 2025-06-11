
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6">
      <Navbar />
      
      <main>
        <section className="py-12">
          <h1 className="text-3xl font-bold font-mono mb-8">About Me</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <p>
              Hello! I'm Hameem, a software engineer with over 3 years of experience building web applications and distributed systems. I'm passionate about creating efficient, scalable, and maintainable software solutions.
            </p>
            
            <p>
              My journey in software development began during my Computer Science studies, where I discovered my love for problem-solving and building things. Since then, I've worked with various technologies and frameworks to deliver impactful solutions.
            </p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Skills & Expertise</h2>
            
            <ul className="list-disc list-inside space-y-1">
              <li>Languages: JavaScript, C++</li>
              <li>Frontend: React, Next.js, HTML, Tailwind CSS</li>
              <li>Backend: Node.js, Express</li>
              <li>Databases: PostgreSQL, MongoDB</li>
              {/* <li>DevOps: Docker, Kubernetes, AWS, GitHub Actions</li> */}
              {/* <li>Testing: Jest, Cypress, PyTest</li> */}
              <li>Other: RESTful APIs, WebSockets</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Experience</h2>
            
            <div className="space-y-4">
              {/* <div>
                <h3 className="text-lg font-medium">Senior Software Engineer at TechCorp</h3>
                <p className="text-sm">January 2022 - Present</p>
                <p className="mt-2">Leading the development of scalable microservices and cloud-native applications.</p>
              </div> */}
              
              {/* <div>
                <h3 className="text-lg font-medium">Software Engineer at InnoSoft</h3>
                <p className="text-sm">March 2019 - December 2021</p>
                <p className="mt-2">Developed and maintained full-stack web applications using React and Node.js.</p>
              </div> */}
              
              <div>
                <h3 className="text-lg font-medium">Software Engineer Intern</h3>
                <p className="text-sm">Aug 2024 - Dec 2024</p>
                <p className="mt-2">Built responsive web interfaces and implemented various features on Quizzify</p>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Education</h2>
            
            <div>
              <h3 className="text-lg font-medium">B.E in Computer Science</h3>
              <p className="text-sm">MVJ College Of Engineering, 2021 - 2025</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
