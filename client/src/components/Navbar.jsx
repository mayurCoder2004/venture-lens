import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Home, LayoutDashboard, LogOut, User } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-12">
        {/* Logo with enhanced styling */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img
              src="/venture-lens-logo.png"
              alt="AI Idea Validator Logo"
              className="h-16 w-16 object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent hidden lg:block">
            VentureLens
          </span> */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2 items-center">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          
          {user && (
            <Link
              to="/dashboard"
              className="flex items-center gap-2 px-4 py-2 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
          )}

          {!user ? (
            <div className="flex gap-2 ml-2">
              <Link
                to="/login"
                className="px-5 py-2 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-800 font-semibold rounded-lg hover:from-yellow-300 hover:to-yellow-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-blue-200">
              {/* User Profile Badge */}
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-yellow-400 flex items-center justify-center text-white font-semibold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-slate-700 font-medium">
                  {user.name}
                </span>
              </div>

              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-lg py-4 px-6 flex flex-col gap-2">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          
          {user && (
            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
          )}

          {!user ? (
            <>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200 text-center"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-800 font-semibold rounded-lg hover:from-yellow-300 hover:to-yellow-400 shadow-md transition-all duration-200 text-center"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              {/* User info */}
              <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg mt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-yellow-400 flex items-center justify-center text-white font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-slate-700 font-medium">
                  Hi, {user.name}
                </span>
              </div>

              {/* Logout button */}
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 shadow-md transition-all duration-200 mt-2"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;