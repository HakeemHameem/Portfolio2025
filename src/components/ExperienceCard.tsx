
import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceCard = ({ title, company, period, description }: ExperienceCardProps) => {
  return (
    <div className="mb-8 border-l-2 border-accent pl-4 py-1 hover:translate-x-1 transition-transform">
      <div className="flex flex-col md:flex-row md:items-baseline mb-1">
        <h3 className="text-xl font-medium text-accent">{title}</h3>
        <span className="md:ml-2 text-muted-foreground">@ {company}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{period}</p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ExperienceCard;
