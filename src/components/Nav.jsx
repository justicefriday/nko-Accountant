import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../image/logo.png";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [nav]);

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
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer flex items-center"
        >
          <img
            src={logo}
            alt="N.K.O Accounting"
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-10">

          {links.map((link) => (

            <li key={link.name}>

              <Link
                to={link.to}
                smooth
                spy
                duration={500}
                offset={-90}
                activeClass="text-[#C9A227]"
                className={`cursor-pointer font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-[#0B1F3A] hover:text-[#C9A227]"
                    : "text-white hover:text-[#C9A227]"
                }`}
              >
                {link.name}
              </Link>

            </li>

          ))}

        </ul>

        {/* Desktop Button */}

        <a
          href="https://wa.me/14166665694?text=Hello,%20I%20would%20like%20to%20schedule%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center bg-[#0B1F3A] hover:bg-[#09172B] text-white px-6 py-3 rounded-xl transition duration-300 hover:scale-105"
        >
          Schedule Consultation
        </a>

        {/* Mobile Icon */}

        <button
          onClick={() => setNav(true)}
          className={`lg:hidden text-3xl z-[70] ${
            scrolled ? "text-[#0B1F3A]" : "text-white"
          }`}
        >
          <FaBars />
        </button>

      </div>

      {/* Overlay */}

      <div
        onClick={() => setNav(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 lg:hidden ${
          nav
            ? "opacity-100 visible z-[60]"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 right-0 h-screen w-[82%] max-w-sm bg-white shadow-2xl z-[70] transition-all duration-500 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Header */}

        <div className="flex items-center justify-between px-6 py-5 border-b">

          <img
            src={logo}
            alt="Logo"
            className="h-12 object-contain"
          />

          <button
            onClick={() => setNav(false)}
            className="text-3xl text-[#0B1F3A]"
          >
            <FaTimes />
          </button>

        </div>

        {/* Links */}

        <ul className="mt-6">

          {links.map((link) => (

            <li key={link.name}>

              <Link
                to={link.to}
                smooth
                spy
                duration={500}
                offset={-90}
                onClick={() => setNav(false)}
                activeClass="bg-[#EEF4FB] text-[#C9A227]"
                className="block px-8 py-5 text-lg font-semibold text-[#0B1F3A] hover:bg-[#EEF4FB] transition cursor-pointer"
              >
                {link.name}
              </Link>

            </li>

          ))}

        </ul>

        {/* Button */}

        <div className="px-8 mt-8">

          <a
            href="https://wa.me/14166665694?text=Hello,%20I%20would%20like%20to%20schedule%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#0B1F3A] hover:bg-[#09172B] text-white py-4 rounded-xl font-semibold transition duration-300"
          >
            Schedule Consultation
          </a>

        </div>

      </div>

    </header>
  );
};

export default Nav;