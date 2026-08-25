import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation";
import logo from "../image/logo.png";

const Footer = () => {
  const services = [
    "Bookkeeping",
    "GST/HST Filing",
    "Personal Tax Returns",
    "Corporate Tax Returns",
    "CAM & Tax Reconciliation",
  ];

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Process", to: "process" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-[#071B34] text-white">

      {/* CTA */}

      <motion.div
        {...fadeUp}
        className="max-w-7xl mx-auto px-5 sm:px-6 pt-20"
      >

        <div className="rounded-[32px] bg-[#C8A24A] px-8 py-10 lg:px-14 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="text-center lg:text-left">

            <span className="uppercase tracking-widest text-sm text-[#0B2341] font-semibold">

              Ready to Get Started?

            </span>

            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#0B2341]">

              Let's Simplify Your Accounting

            </h2>

            <p className="mt-3 text-[#2b2b2b] max-w-xl">

              Speak with our experienced accounting professionals today.

            </p>

          </div>

          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer bg-[#0B2341] hover:bg-[#14375c] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            Request Consultation
          </Link>

        </div>

      </motion.div>

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <img
              src={logo}
              alt="N.K.O Accounting"
              className="h-16 bg-white rounded-xl p-2"
            />

            <p className="mt-6 text-gray-300 leading-8">

              Professional bookkeeping, taxation and Accounting
              services helping businesses and individuals stay
              financially organized and compliant.

            </p>

            <div className="flex gap-4 mt-8">

              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-full border border-white/20 hover:border-[#C8A24A] hover:bg-[#C8A24A] hover:text-[#0B2341] flex items-center justify-center transition-all duration-300"
                >
                  <Icon />
                </a>

              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold text-white mb-6">

              Services

            </h3>

            <ul className="space-y-4">

              {services.map((service) => (

                <li
                  key={service}
                  className="text-gray-300 hover:text-[#C8A24A] transition cursor-pointer"
                >
                  {service}
                </li>

              ))}

            </ul>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">

              Quick Links

            </h3>

            <ul className="space-y-4">

              {links.map((link) => (

                <li key={link.name}>

                  <Link
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-gray-300 hover:text-[#C8A24A] transition"
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">

              Contact

            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <FaPhoneAlt className="text-[#C8A24A] mt-1 flex-shrink-0"/>

                <span className="text-gray-300">
                  +1 289-803-6886
                </span>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-[#C8A24A] mt-1 flex-shrink-0"/>

                <span className="text-gray-300">
                  Nk@nkoaccounting.com
                </span>

              </div>

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-[#C8A24A] mt-1 flex-shrink-0"/>

                <span className="text-gray-300">
                  Toronto, Ontario, Canada
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-center text-sm">

            © {new Date().getFullYear()} N.K.O Accounting Professional Corporation. All rights reserved.

          </p>

          <div className="flex items-center gap-5">

            <p className="text-gray-400 text-sm">

              Designed by <span className="text-[#C8A24A] font-semibold">Future Coders</span>

            </p>

            <Link
              to="home"
              smooth={true}
              duration={600}
              className="cursor-pointer w-11 h-11 rounded-full bg-[#C8A24A] hover:bg-white text-[#0B2341] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >

              <FaArrowUp />

            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;