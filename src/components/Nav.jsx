import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo */}
        <img
          src="/src/image/logo.jpeg"
          alt="N.K.O Logo"
          className="h-14"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-red-600 transition font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
          Book Consultation
        </button>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col p-6 gap-6">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}

            <button className="bg-red-600 text-white py-3 rounded-lg">
              Book Consultation
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;