import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-24 py-6 text-center text-gray-600">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition"
          >
            <Linkedin size={22} />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-medium">VentureLens</span>. Built with ❤️ by{" "}
          <span className="text-purple-600 font-semibold">Mayur Pawar</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
