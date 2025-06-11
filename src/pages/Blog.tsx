
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPostCard from '../components/BlogPostCard';

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable Systems with Go",
      date: "April 12, 2024",
      summary: "Strategies for designing high-throughput services with Go's concurrency model.",
      slug: "scalable-systems-go"
    },
    {
      title: "Modern React Patterns",
      date: "March 28, 2024",
      summary: "Exploring advanced patterns for React component composition.",
      slug: "modern-react-patterns"
    },
    {
      title: "Optimizing PostgreSQL Queries",
      date: "March 15, 2024",
      summary: "Techniques for improving database performance in high-traffic applications.",
      slug: "postgres-optimization"
    },
    {
      title: "Microservices Communication Patterns",
      date: "February 27, 2024",
      summary: "A deep dive into synchronous and asynchronous communication between services.",
      slug: "microservice-communication"
    },
    {
      title: "CI/CD Best Practices",
      date: "February 12, 2024",
      summary: "Setting up effective continuous integration and deployment pipelines.",
      slug: "cicd-best-practices"
    },
    {
      title: "State Management in Modern Frontend Applications",
      date: "January 30, 2024",
      summary: "Comparing different approaches to managing state in React applications.",
      slug: "state-management-frontend"
    }
  ];

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6">
      <Navbar />
      
      <main>
        <section className="py-12">
          <h1 className="text-3xl font-bold font-mono mb-8">Blog</h1>
          
          <div>
            {posts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
