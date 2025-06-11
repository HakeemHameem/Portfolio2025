
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  title: string;
  date: string;
  summary: string;
  slug: string;
}

const BlogPostCard = ({ title, date, summary, slug }: BlogPostCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="block mb-8 hover:translate-x-1 transition-transform">
      <div className="flex flex-col">
        <div className="mb-1 flex items-baseline">
          <h3 className="text-xl font-medium mr-3 text-accent">{title}</h3>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <p className="text-muted-foreground">{summary}</p>
      </div>
    </Link>
  );
};

export default BlogPostCard;
