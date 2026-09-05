import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import { fadeUp } from "../utils/animation";
import heroImage from "../image/hero2.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-16 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#C8A348]/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-[32rem] sm:h-[32rem] rounded-full bg-[#081F4D]/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center rounded-full bg-[#C8A348]/15 text-[#081F4D] px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Trusted Accounting Professionals
            </span>

            <h1 className="mt-6 sm:mt-8 text-[#081F4D] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Reliable Accounting
              <span className="block text-[#C8A348]">
                Solutions
              </span>
              You Can Trust
            </h1>

            <p className="mt-6 sm:mt-8 max-w-xl text-gray-600 text-base sm:text-lg leading-relaxed sm:leading-8">
              We are dedicated to delivering exceptional service to our clients, helping businesses meet both immediate
              and long-term accounting needs through our unique expertise.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer bg-[#081F4D] hover:bg-[#10306B] text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
              >
                Request Consultation
                <FaArrowRight />
              </Link>

              <Link
                to="services"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer border-2 border-[#081F4D] text-[#081F4D] hover:bg-[#081F4D] hover:text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
              >
                <FaPlay />
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 sm:mt-12 lg:mt-0 pb-16 sm:pb-20 lg:pb-0"
          >
            {/* Gold Background Block */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full rounded-[24px] sm:rounded-[35px] bg-[#C8A348]"></div>

            {/* Image */}
            <img
              src={heroImage}
              alt="Professional Accountant"
              className="relative z-10 w-full rounded-[24px] sm:rounded-[35px] object-cover shadow-[0_30px_70px_rgba(8,31,77,.18)]"
            />

            {/* Top Floating Card */}
            <div className="hidden lg:flex absolute top-8 -left-12 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C8A348]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#081F4D] text-xl font-bold">
                  ✓
                </span>
              </div>

              <div>
                <h4 className="font-bold text-[#081F4D]">
                  Trusted by Businesses
                </h4>
                <p className="text-sm text-gray-500">
                  Accurate. Reliable. Professional.
                </p>
              </div>
            </div>

            {/* Bottom Floating Card */}
            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                -bottom-14 sm:-bottom-16
                lg:left-10
                lg:translate-x-0
                lg:-bottom-7
                z-20
                bg-white
                rounded-xl sm:rounded-2xl
                shadow-2xl
                border border-gray-100
                px-4 sm:px-6
                py-4 sm:py-5
                flex items-center gap-3 sm:gap-4
                w-[88%] sm:w-[92%] max-w-sm
              "
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#081F4D] flex items-center justify-center flex-shrink-0">
                <FaShieldAlt className="text-[#C8A348] text-lg sm:text-2xl" />
              </div>

              <div className="min-w-0">
                <h3 className="text-base sm:text-xl font-bold text-[#081F4D]">
                  15+ Years
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 leading-relaxed">
                  Delivering trusted Accounting services across Canada.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;