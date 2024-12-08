'use client';

import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaUserAlt, FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-24">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link href="/menu" className="hover:text-orange-500">
            Menu
          </Link>
          <Link href="/blog" className="hover:text-orange-500">
            Blog
          </Link>
          <div className="relative group">
            <Link href="/about" className="hover:text-orange-500">
              About
            </Link>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-gray-800 text-white py-2 rounded">
              <Link href="/about-us" className="block px-4 py-1 hover:bg-gray-700">
                About Us
              </Link>
              <Link href="/our-team" className="block px-4 py-1 hover:bg-gray-700">
                Our Team
              </Link>
            </div>
          </div>
          <Link href="/Faq" className="hover:text-orange-500">
            FAQ
          </Link>
          <Link href="/SignUp" className="hover:text-orange-500">
            Contact
          </Link>
        </nav>

        {/* Logo (Centered) */}
        <div className="text-center md:mb-10">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Food<span className="text-white">tuck</span>
          </Link>
        </div>

        {/* Search, Cart, and Auth Icons (Right-Aligned) */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-orange-500 z-10" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-900 text-white px-4 py-2 pl-10 rounded-full focus:outline-none border border-orange-500"
            />
          </div>

          {/* Cart Icon */}
          <button className="text-white-500">
            <FaShoppingCart size={20} />
          </button>

          {/* User Icon */}
          <Link href='/SignUp'>
          <button className="text-white-500">
            <FaUserAlt size={20} />
          </button>
          </Link>
          
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden text-orange-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-orange-500">
            Home
          </Link>
          <Link href="/menu" className="block hover:text-orange-500">
            Menu
          </Link>
          <Link href="/blog" className="block hover:text-orange-500">
            Blog
          </Link>
          <Link href="/about" className="block hover:text-orange-500">
            About
          </Link>
          <Link href="/Faq" className="block hover:text-orange-500">
            FAQ
          </Link>
          <Link href="/SignUp" className="block hover:text-orange-500">
            Contact
          </Link>

          {/* Search Bar (Mobile) */}
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-orange-500 z-10" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-900 text-white px-4 py-2 pl-10 rounded-full focus:outline-none border border-orange-500"
            />
          </div>

          {/* Icons (Mobile) */}
          <div className="flex justify-around mt-4 space-x-4">
            <button className="text-white-500">
              <FaShoppingCart size={20} />
            </button>
            <Link href='/SignUp'>
          <button className="text-white-500">
            <FaUserAlt size={20} />
          </button>
          </Link>
          </div>
        </div>
      )}
    </header>
  );
}
