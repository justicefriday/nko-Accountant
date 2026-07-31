import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { fadeUp } from "../utils/animation";
import aboutImage from "../image/pics.jpg";

const features = [
  "Professional Bookkeeping",
  "GST/HST Filing",
  "Corporate Tax Returns",
  "Personal Tax Returns",
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* IMAGE */}

          <motion.div
            {...fadeUp}
            className="relative flex justify-center order-2 lg:order-1"
          >

            <div className="relative w-full max-w-lg">

              {/* Background Decoration */}

              <div className="absolute -top-8 -left-8 w-48 h-48 bg-red-100 rounded-full blur-3xl opacity-50"></div>

              <img
                src={aboutImage}
                alt="N.K.O Accounting"
                className="relative rounded-3xl shadow-2xl w-full object-cover z-10"
              />

              {/* Floating Trust Card */}

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-blue-950 text-white rounded-2xl shadow-2xl px-6 py-5 flex items-center gap-4 w-[90%] sm:w-auto z-20">

                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">

                  <FaShieldAlt className="text-2xl"/>

                </div>

                <div>

                  <h3 className="text-xl font-bold">

                    Trusted Service

                  </h3>

                  <p className="text-sm text-gray-300">

                    Serving businesses with confidence

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* CONTENT */}

          <motion.div
            {...fadeUp}
            className="order-1 lg:order-2 text-center lg:text-left"
          >

            <span className="uppercase tracking-[4px] text-red-600 font-semibold text-sm">

              About Us

            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">

              Trusted Accounting
              <br />
              For Your Business

            </h2>

            <p className="mt-6 text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">

              We help businesses and individuals stay financially
              organized through reliable bookkeeping, tax filing
              and accounting services.

            </p>

            <p className="mt-4 text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">

              Our goal is to simplify your finances so you can
              focus on growing your business with confidence.

            </p>

            {/* FEATURES */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 hover:bg-red-50 transition-all duration-300 shadow-sm"
                >

                  <div className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">

                    <FaCheckCircle className="text-red-600"/>

                  </div>

                  <span className="text-blue-950 font-semibold text-sm sm:text-base leading-6">

                    {feature}

                  </span>

                </div>

              ))}

            </div>

            {/* CTA CARD */}

            <div className="mt-10 bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl p-6 text-white shadow-xl">

              <h3 className="text-2xl font-bold">

                Accurate Accounting.
                Trusted Support.

              </h3>

              <p className="text-gray-300 mt-3 leading-7">

                Helping individuals and businesses make smarter
                financial decisions every day.

              </p>

            </div>

            {/* BUTTON */}

            <div className="mt-10 flex justify-center lg:justify-start">

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105">

                Book a Consultation

                <FaArrowRight/>

              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;