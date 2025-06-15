import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Youtube-Backend",
      description: "Implemented the backend of a Youtube-type platform featuring watch history, video upload with date and uploader info, search functionality, comments and playlist management.",
      date: "Building",
      link: "https://github.com/HakeemHameem/youtube-backend"
    },
    {
      title: "Software Development Club Website",
      description: "Developed a dynamic website for the Software Development Club, facilitating communication and engagement among more than 1500 members.",
      date: "March 2024",
      link: "https://sdcmvjce.netlify.app/"
    },
    {
      title: "Online Real-Time Code Editor",
      description: "An online coding platform enabling multiple developers to collaborate live in shared rooms with synchronized code editing.",
      date: "June 2024",
      link: "https://github.com/HakeemHameem/realtime-code-editor"
    },
    {
      title: "Video Steganography",
      description: "Developed a robust Video Steganography system to securely embed and extract hidden messages within video files, ensuring data confidentiality.",
      date: "November 2024",
      link: "https://videostegnography.netlify.app/"
    },
    {
      title: "Password Generator",
      description: "A password generator creates strong, random passwords using a mix of characters, letters, numbers and symbols with copy functionality.",
      date: "August 2023",
      link: "https://randompasswordgenerator77.netlify.app/"
    },
    {
      title: "Ecommerce Platform",
      description: "A complete ecommerce solution that enables users to browse, search, purchase, and manage products.",
      date: "Jan 2022",
      link: "https://eliteshopping.netlify.app/#"
    },
    {
      title: "Ezymaths",
      description: "Ezymath gives students the tools they need to fully understand and solve math problems.",
      date: "June 2021",
      link: "https://eazymaths.netlify.app/"
    },
  ];

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6">
      <Navbar />

      <main>
        <section className="py-12">
          <h1 className="text-3xl font-bold font-mono mb-8">Projects</h1>

          <div>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
