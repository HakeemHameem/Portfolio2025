import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import { Code, Trophy } from 'lucide-react';

const Index = () => {
  const featuredProjects = [
    {
      title: "Youtube-Backend",
      description: "Implemented the backend of a Youtube-type platform featuring watch history, video upload with date and uploader info, search functionality, comments and playlist management.",
      date: "April 2025",
      link: "https://github.com/HakeemHameem/youtube-backend"
    },
    {
      title: "Video Steganography",
      description: "Developed a robust Video Steganography system to securely embed and extract hidden messages within video files, ensuring data confidentiality.",
      date: "February 2025",
      link: "https://videostegnography.netlify.app/"
    },
    {
      title: "Software Development Club",
      description: "Developed a dynamic website for the Software Development Club, facilitating communication and engagement among more than 1500 members.",
      date: "August 2024",
      link: "https://sdcmvjce.netlify.app/"
    }
  ];

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Soven Developer",
      period: "Aug 2024 - Dec 2024",
      description: "Built responsive web interfaces and implemented various features on Quizzify."
    },
  ];

  const competitivePlatforms = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/HakeemHameem/",
      description: "Solved 200+ problems focusing on algorithms and data structures."
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/hameemhus7u3y/",
      description: "Active contributor and solved 150+ DSA problems."
    }
  ];

  const SmartLink = ({ to, href, children }: { to?: string; href?: string; children: React.ReactNode }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (to) {
    return <Link to={to}>{children}</Link>;
  }
  return <>{children}</>;
};


  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6">
      <Navbar />

      <main>
        <section className="py-16">
          <h1 className="text-4xl font-bold font-mono mb-2">Hakeem Hameem</h1>
          <h2 className="text-2xl mb-6 text-accent">Software Engineer</h2>
          <p className="text-muted-foreground max-w-2xl">
            I build efficient, scalable, and user-friendly software solutions. With expertise in full-stack development,
            I create applications that solve real-world problems while maintaining clean, maintainable code.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-mono flex items-center">
              <Trophy className="mr-2 text-accent" size={24} />
              Projects</h2>
            <Link to="/projects" className="text-accent hover:underline">
              View all
            </Link>
          </div>

          <div>
            {featuredProjects.map((project, index) => {
              return (
  <SmartLink
    key={index}
    href={project.link}
    to={!project.link ? `/projects/${project.slug}` : undefined}
  >
    <div className="mb-4 hover:scale-[1.01] transition-transform">
      <ProjectCard {...project} />
    </div>
  </SmartLink>
);

            })}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-mono mb-8 flex items-center">
            <Code className="mr-2 text-accent" size={24} />
            Competitive Programming
          </h2>

          <div className="space-y-6">
            {competitivePlatforms.map((platform, index) => (
              <div key={index} className="border-l-2 border-accent pl-4 py-1 hover:translate-x-1 transition-transform">
                <a href={platform.url} target="_blank" rel="noopener noreferrer" className="flex flex-col">
                  <h3 className="text-xl font-medium text-accent">{platform.name}</h3>
                  <p className="text-muted-foreground">{platform.description}</p>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono mb-8">Experience</h2>

          <div>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
