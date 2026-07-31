import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../image/logo.jpeg";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Process", to: "process" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <div className="bg-white rounded-xl shadow-lg p-2">

            <img
              src={logo}
              alt="N.K.O Accounting"
              className="h-12 w-auto"
            />

          </div>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-10">

          {links.map((link) => (

            <li key={link.name}>

              <Link
                to={link.to}
                smooth={true}
                spy={true}
                duration={500}
                offset={-90}
                activeClass="text-red-600"
                className={`cursor-pointer font-medium transition-all duration-300 hover:text-red-600 ${
                  scrolled ? "text-blue-950" : "text-white"
                }`}
              >
                {link.name}
              </Link>

            </li>

          ))}

        </ul>

        {/* CTA */}

        <a
          href="https://wa.me/14166665694"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Get Started
        </a>

        {/* Mobile Icon */}

        <button
          onClick={() => setNav(!nav)}
          className={`lg:hidden text-3xl transition ${
            scrolled ? "text-blue-950" : "text-white"
          }`}
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 ${
          nav ? "right-0" : "-right-full"
        } w-72 h-screen bg-white shadow-2xl transition-all duration-500 lg:hidden`}
      >

        {/* Close */}

        <div className="flex justify-between items-center p-6 border-b">

          <img
            src={logo}
            alt="Logo"
            className="h-10"
          />

          <button
            onClick={() => setNav(false)}
            className="text-3xl text-blue-950"
          >
            <FaTimes />
          </button>

        </div>

        {/* Links */}

        <ul className="flex flex-col mt-10">

          {links.map((link) => (

            <li key={link.name}>

              <Link
                to={link.to}
                smooth={true}
                spy={true}
                duration={500}
                offset={-90}
                onClick={() => setNav(false)}
                activeClass="text-red-600 bg-red-50"
                className="block px-8 py-5 text-lg font-semibold text-blue-950 hover:bg-red-50 hover:text-red-600 transition cursor-pointer"
              >
                {link.name}
              </Link>

            </li>

          ))}

        </ul>

        {/* CTA */}

        <div className="px-8 mt-10">

          <a
            href="https://wa.me/14166665694"
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition"
            
          >
            Get Started
          </a>

        </div>

      </div>

      {/* Overlay */}

      {nav && (
        <div
          onClick={() => setNav(false)}
          className="fixed inset-0 bg-black/40 lg:hidden -z-10"
        />
      )}
    </header>
  );
};

export default Nav;