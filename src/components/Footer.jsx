import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  

  return (
    <footer className="relative mt-auto border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-8">
      {/* Top Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6">
          {/* Personal Info */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              Tanmay Warthe
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              Computer Technology student and aspiring developer from Nagpur, Maharashtra, India.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-blue-500">📧</span>
                <a 
                  href="mailto:tanmaywarthe02@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs sm:text-sm"
                >
                  tanmaywarthe02@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-500">📱</span>
                <a 
                  href="tel:+918468853407"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs sm:text-sm"
                >
                  +91 8468853407
                </a>
              </div>
            </div>
          </div>
        </div>

       

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Tanmay Warthe. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <span>Made by Tanmay Warthe</span>
              <span>•</span>
              <span>React & Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


