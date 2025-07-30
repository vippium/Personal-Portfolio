import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-white/5 border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-6 flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-8">
          <a
            href="https://github.com/vippium/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            <Github size={26} />
          </a>
          <a
            href="https://instagram.com/vip.in_jpr.sanganer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition duration-300"
          >
            <Instagram size={26} />
          </a>
          <a
            href="https://linkedin.com/in/vipin~prajapat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            <Linkedin size={26} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-white/60 text-sm text-center">
          © {new Date().getFullYear()} Vipin Prajapat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
