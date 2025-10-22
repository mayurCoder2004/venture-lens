import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Branding */}
        <div className="flex items-center">
          <img
            src="/venture-lens-logo.png" // Replace this with your logo path
            alt="AI Idea Validator Logo"
            className="w-32 md:w-40"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 text-slate-400">
          <Link to="/" className="hover:text-white transition duration-300">Home</Link>
          <Link to="/dashboard" className="hover:text-white transition duration-300">Dashboard</Link>
          <Link to="/about" className="hover:text-white transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-white transition duration-300">Contact</Link>
          <Link to="/terms" className="hover:text-white transition duration-300">Terms</Link>
          <Link to="/privacy" className="hover:text-white transition duration-300">Privacy</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-100 transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-slate-500 text-sm">
        © 2025 AI Idea Validator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
