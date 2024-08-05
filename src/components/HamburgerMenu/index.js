import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon Button */}
      <button
        className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 hover:bg-gray-200 transition duration-150"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? "rotate-90" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-2">
          <div>
            <Link href="/">
              <img
                src="/darklogo.png" // Path to your image in the public folder
                alt="Logo"
                width={150} // Specify width
                height={50} // Specify height
              />
            </Link>
          </div>
          {/* Close Button */}
          <div>
            <button className=" text-gray-700 mt-4" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-16 space-y-4">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-150"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-150"
          >
            SHOP
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-150"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-150"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}
