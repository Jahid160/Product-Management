import React from "react";

import { Link } from "react-router";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              CEMZO TECHNOLOGIES
            </p>
            <p className="text-xs mt-1">
              &copy; {currentYear} All rights reserved. React Developer Intern
              Assignment.
            </p>
          </div>

          {/* Quick Links - Using Link instead of <a> */}
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Terms of Service
            </Link>
            <Link
              to="/support"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
