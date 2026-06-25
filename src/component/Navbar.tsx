import React, { useState } from "react";
// Import Link from your router library
import { Link } from "react-router";

interface NavbarProps {
  currentTheme?: "light" | "dark";
  toggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTheme = "light",
  toggleTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Brand - Using Link instead of <a> */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-wider"
            >
              CEMZO TECHNOLOGIES
            </Link>
          </div>

          {/* Desktop Navigation - Using Link instead of <a> */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Products
            </Link>

            {toggleTheme && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                aria-label="Toggle Theme"
              >
                {currentTheme === "light" ? "🌙" : "☀️"}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            {toggleTheme && (
              <button onClick={toggleTheme} className="p-2 text-lg">
                {currentTheme === "light" ? "🌙" : "☀️"}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Using Link instead of <a> */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 px-4 pt-2 pb-4 space-y-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 py-2 rounded-md font-medium"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 py-2 rounded-md font-medium"
          >
            Products
          </Link>
        </div>
      )}
    </nav>
  );
};
