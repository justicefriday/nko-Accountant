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
import logo from "../image/logo.jpeg";
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
    <footer className="bg-blue-950 text-white">

      {/* CTA */}

      <motion.div
        {...fadeUp}
        className="max-w-7xl mx-auto px-6 pt-16"
      >

        <div className="bg-red-600 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="text-center lg:text-left">

            <h2 className="text-3xl lg:text-4xl font-bold">

              Ready To Grow Your Business?

            </h2>

            <p className="mt-3 text-red-100">

              Let's simplify your accounting and taxes today.

            </p>

          </div>

          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-950 hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>

        </div>

      </motion.div>

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <img
              src={logo}
              alt="N.K.O Accounting"
              className="h-16 bg-white rounded-xl p-2"
            />

            <p className="text-gray-300 mt-6 leading-8">

              Professional bookkeeping, tax filing and accounting
              services helping businesses across Canada stay
              compliant and financially organized.

            </p>

            <div className="flex gap-4 mt-8">

              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all duration-300"
                >

                  <Icon />

                </a>

              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold mb-6">

              Services

            </h3>

            <ul className="space-y-4 text-gray-300">

              {services.map((service) => (

                <li
                  key={service}
                  className="hover:text-red-400 transition cursor-pointer"
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
                    className="cursor-pointer text-gray-300 hover:text-red-400 transition"
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

              <div className="flex items-start gap-4">

                <FaPhoneAlt className="text-red-500 mt-1"/>

                <span>+1 (416) 666-5694</span>

              </div>

              <div className="flex items-start gap-4">

                <FaEnvelope className="text-red-500 mt-1"/>

                <span>info@nkoaccounting.ca</span>

              </div>

              <div className="flex items-start gap-4">

                <FaMapMarkerAlt className="text-red-500 mt-1"/>

                <span>Toronto, Ontario, Canada</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-center">

            © {new Date().getFullYear()} N.K.O Accounting Professional Corporation. All Rights Reserved.

          </p>

          <div className="flex items-center gap-6">

            <p className="text-gray-400">

              Designed & Developed by <span className="text-red-500">Future Coders</span>

            </p>

            <Link
              to="home"
              smooth={true}
              duration={600}
              className="cursor-pointer w-11 h-11 rounded-full bg-red-600 hover:bg-white hover:text-red-600 flex items-center justify-center transition-all duration-300"
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