import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-3 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/venture-lens-logo.png"
            alt="AI Idea Validator Logo"
            className="h-20 w-20 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-blue-700 font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
          <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
          <Link
            to="/signup"
            className="bg-yellow-400 text-blue-700 px-4 py-1.5 rounded-md hover:bg-yellow-300 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-blue-700">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-blue-200 shadow-md py-3 flex flex-col items-center gap-4">
          <Link to="/" onClick={() => setOpen(false)} className="text-blue-700 hover:text-yellow-400 transition">Home</Link>
          <Link to="/dashboard" onClick={() => setOpen(false)} className="text-blue-700 hover:text-yellow-400 transition">Dashboard</Link>
          <Link to="/login" onClick={() => setOpen(false)} className="text-blue-700 hover:text-yellow-400 transition">Login</Link>
          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="bg-yellow-400 text-blue-700 px-4 py-1.5 rounded-md hover:bg-yellow-300 transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
