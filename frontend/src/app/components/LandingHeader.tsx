"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-green-500">Take Five</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-700 hover:text-green-500">
            About Us
          </Link>
          <Link
            href="/how-it-works"
            className="text-gray-700 hover:text-green-500"
          >
            How It Works
          </Link>
          <Link href="/features" className="text-gray-700 hover:text-green-500">
            Features
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-green-500">
            Login
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>
        <Link
          href="/get-started"
          className="hidden md:block bg-yellow-400 text-green-500 px-4 py-2 rounded hover:bg-yellow-500"
        >
          Get Started
        </Link>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="space-y-4 px-6 py-4">
            <li>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-green-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="block text-gray-700 hover:text-green-500"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="block text-gray-700 hover:text-green-500"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block text-gray-700 hover:text-green-500"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/get-started"
                className="block bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
