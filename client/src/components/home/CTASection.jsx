import React from "react";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Column */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Validate Your Startup Idea?
          </h2>
          <p className="text-lg md:text-xl mb-6 text-slate-200">
            Let our AI analyze your idea and give actionable insights in seconds.  
            Take the first step toward building your successful startup today!
          </p>

          {/* CTA Button */}
          <Link
            to="/analyze"
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded shadow-lg transition duration-300"
          >
            <FaRocket className="mr-3 w-5 h-5" />
            Get Started
          </Link>
        </div>

        {/* Right Column - Optional Illustration */}
        <div className="flex-1 text-center md:text-right">
          <img
            src="/cta-illustration.png" // Replace with your illustration
            alt="Startup Illustration"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
