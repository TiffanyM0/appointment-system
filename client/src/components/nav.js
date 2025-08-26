// Navigation.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo / Title */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          AfyaLink
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="nav-link hover:text-blue-500">
            Home
          </Link>
          <Link to="/doctor_login" className="nav-link hover:text-blue-500">
            For Therapists
          </Link>
          <Link to="/patient_login" className="nav-link hover:text-blue-500">
            For Clients
          </Link>
          <Link to="/admin_login" className="nav-link hover:text-blue-500">
            For Admin
          </Link>
          <Link to="/business" className="nav-link hover:text-blue-500">
            For Partners
          </Link>
          <Link to="/about" className="nav-link hover:text-blue-500">
            About
          </Link>
          <Link to="/contact" className="nav-link hover:text-blue-500">
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          id="mobileMenuBtn"
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`} />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div id="mobileMenu" className="md:hidden bg-gray-100 px-4 py-3 space-y-3">
          <Link to="/" className="nav-link block" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/doctor_login" className="nav-link block" onClick={closeMenu}>
            For Therapists
          </Link>
          <Link to="/patient_login" className="nav-link block" onClick={closeMenu}>
            For Clients
          </Link>
          <Link to="/admin_login" className="nav-link block" onClick={closeMenu}>
            For Admin
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
