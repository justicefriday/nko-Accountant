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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";

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
  className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-100 transition-all duration-500 ] ${
    scrolled ? "shadow-lg py-3" : "py-5"
  }`}
>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer flex-shrink-0"
        >
          <div >
            <img
              src={logo}
              alt="N.K.O Accounting"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
            />
          </div>
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
                activeClass="text-[#C8A24A]"

                className="cursor-pointer font-medium text-[#071B34] hover:text-[#C8A24A] transition-all duration-300"
              >
                {link.name}
              </Link>

            </li>

          ))}

        </ul>

        {/* Desktop Button */}
        <a
          href="https://wa.me/12898036886?text=Hello,%20I%20would%20like%20to%20schedule%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center bg-[#0B2341] hover:bg-[#b7923f] text-[#C8A24A] px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          Schedule Consultation
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setNav(true)}
          className="lg:hidden text-3xl text-[#0B2341] z-[70]"
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

        {/* Mobile Header */}

        <div className="flex items-center justify-between px-6 py-5 border-b">

          <div className="bg-white rounded-xl p-2 shadow-md">

            <img
              src={logo}
              alt="N.K.O Accounting"
              className="h-10 object-contain"
            />

          </div>

          <button
            onClick={() => setNav(false)}
            className="text-3xl text-[#0B2341]"
          >
            <FaTimes />
          </button>

        </div>

        {/* Mobile Links */}

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
                activeClass="bg-[#EEF4FB] text-[#C8A24A]"
                className="block px-8 py-5 text-lg font-semibold text-[#0B2341] hover:bg-[#EEF4FB] transition-all duration-300 cursor-pointer"
              >
                {link.name}
              </Link>

            </li>

          ))}

        </ul>

        {/* Mobile CTA */}

        <div className="px-8 mt-8">

          <a
            href="https://wa.me/12898036886?text=Hello,%20I%20would%20like%20to%20schedule%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#C8A24A] hover:bg-[#b7923f] text-[#0B2341] py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Schedule Consultation
          </a>

        </div>

      </div>

    </header>
  );
};

export default Nav;



