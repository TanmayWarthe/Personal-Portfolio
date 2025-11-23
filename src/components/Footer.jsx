import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/TanmayWarthe",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tanmay-warthe/",
      icon: Linkedin
    },
    {
      name: "Twitter",
      url: "https://x.com/_tanmay_warthe",
      icon: Twitter
    },
    {
      name: "Email",
      url: "mailto:tanmaywarthe02@gmail.com",
      icon: Mail
    }
  ];

  return (
    <footer className="relative bg-[#F5F5DC] border-t border-gray-200/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-300 transition-all duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600 flex items-center justify-center gap-1.5">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> by{" "}
              <span className="font-semibold text-gray-800">Tanmay Warthe</span>
            </p>
            <p className="text-xs text-gray-500">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
