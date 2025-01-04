"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Helper function to check if the link is active
  const getLinkClass = (path) => 
    pathname === path ? "font-bold text-blue-600" : "text-black hover:text-gray-500"; // Black for normal, blue for active

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <Link className="text-3xl font-bold leading-none" href="#">
          <svg className="h-10" alt="logo" viewBox="0 0 10240 10240">
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M8284 9162 c-2 -207 -55..."
            ></path>
          </svg>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="navbar-burger flex items-center text-blue-600 p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:space-x-6">
          <li>
            <Link className={`text-sm ${getLinkClass('/')}`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={`text-sm ${getLinkClass('/about')}`} href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className={`text-sm ${getLinkClass('/service')}`} href="/service">
              Services
            </Link>
          </li>
          <li>
            <Link className={`text-sm ${getLinkClass('/coming-soon')}`} href="/coming-soon">
              Pricing
            </Link>
          </li>
          <li>
            <Link className={`text-sm ${getLinkClass('/contact-us')}`} href="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            className="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
            href="/under-contruction"
          >
            Sign In
          </Link>
          <Link
            className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="/under-contruction"
          >
            Sign Up
          </Link>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="navbar-menu lg:hidden">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link className={`text-sm ${getLinkClass('/')}`} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`text-sm ${getLinkClass('/about')}`} href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className={`text-sm ${getLinkClass('/service')}`} href="/service">
                Services
              </Link>
            </li>
            <li>
              <Link className={`text-sm ${getLinkClass('/coming-soon')}`} href="/coming-soon">
                Pricing
              </Link>
            </li>
            <li>
              <Link className={`text-sm ${getLinkClass('/contact-us')}`} href="/contact-us">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
