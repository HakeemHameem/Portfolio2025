
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6">
      <Navbar />
      
      <main className="flex flex-col items-center justify-center py-16">
        <h1 className="text-6xl font-bold font-mono mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
        >
          Return Home
        </Link>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
