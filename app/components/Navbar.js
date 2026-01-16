'use client'

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Dheeraj Bishwas</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-slate-300 font-medium">
          <NavLink href="#hero" label="Home" />
          <NavLink href="#about" label="About" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#contact" label="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 dark:text-slate-300">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 px-6 pb-4 space-y-2 text-gray-700 dark:text-slate-300 font-medium shadow-md">
          <NavLink href="#hero" label="Home" onClick={toggleMenu} />
          <NavLink href="#about" label="About" onClick={toggleMenu} />
          <NavLink href="#skills" label="Skills" onClick={toggleMenu} />
          <NavLink href="#projects" label="Projects" onClick={toggleMenu} />
          <NavLink href="#contact" label="Contact" onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="hover:text-blue-600 transition-colors duration-200 block"
    >
      {label}
    </a>
  );
}
