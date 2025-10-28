import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaRocket, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 pt-16 pb-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo / Branding Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="/venture-lens-logo.png"
                  alt="AI Idea Validator Logo"
                  className="w-16 h-16 object-contain relative z-10"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                VentureLens
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering entrepreneurs with AI-driven insights to validate and launch successful startups.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50"
  >
    <FaLinkedin size={18} />
  </a>

  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
  >
    <FaGithub size={18} />
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-sky-500 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/50"
  >
    <FaTwitter size={18} />
  </a>
</div>

          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FaRocket className="text-yellow-400" size={16} />
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/analyze" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                  Analyze Idea
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-slate-500 text-sm flex items-center gap-2">
            <span>© 2025 Venture Lens. All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="text-slate-500 text-sm flex items-center gap-2">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" size={14} />
            <span>for entrepreneurs</span>
          </div>

          {/* Additional info */}
          <div className="text-slate-500 text-sm">
            <span className="inline-flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;