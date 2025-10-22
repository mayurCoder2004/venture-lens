import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-28">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Validate Your Startup Ideas Instantly with AI
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-200">
            Get AI-powered insights on market potential, competition, and monetization strategies in seconds.  
            Make informed decisions for your next big idea.
          </p>

          {/* Call-to-Action Button */}
          <Link
            to="/analyze"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded shadow-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <img
            src="/hero-ai-illustration.png" // Replace with your illustration
            alt="AI Startup Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
