
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  link?: string; // ✅ make this optional
}


const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, date, link }) => {
  return (
    <div className="mb-6">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-accent hover:underline block"
        >
          {title}
        </a>
      ) : (
        <h3 className="text-xl font-bold text-accent">{title}</h3>
      )}

      <p className="text-muted-foreground">{description}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
};

export default ProjectCard;
