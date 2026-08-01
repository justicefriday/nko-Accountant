import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import { fadeUp } from "../utils/animation";
import heroImage from "../image/hero2.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center overflow-hidden pt-28 pb-12 bg-gradient-to-br from-[#081F4D] via-[#0D2F6B] to-[#123C87]"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}

          <motion.div {...fadeUp}>

            <span className="inline-flex items-center rounded-full bg-[#C8A348] text-[#081F4D] px-5 py-2 text-sm font-semibold tracking-wider uppercase">
              Trusted Accounting Professionals
            </span>

            <h1 className="mt-8 text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">

              Professional Accounting

              <span className="block text-[#C8A348]">
                Solutions
              </span>

              You Can Trust

            </h1>

            <p className="mt-8 max-w-xl text-gray-200 text-lg leading-8">

              Helping businesses and individuals stay financially
              organized through bookkeeping, taxation, financial
              reporting and trusted professional advice.

            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer bg-[#C8A348] hover:bg-[#B48E33] text-[#081F4D] font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Request Consultation

                <FaArrowRight />

              </Link>

              <Link
                to="services"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white hover:text-[#081F4D] transition-all duration-300 hover:scale-105"
              >

                <FaPlay />

                Our Services

              </Link>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative mt-12 lg:mt-0"
          >

            <img
              src={heroImage}
              alt="Professional Accountant"
              className="w-full rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,.35)] object-cover"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 w-[90%] max-w-xs lg:max-w-sm">

  <div className="w-12 h-12 rounded-full bg-[#081F4D] flex items-center justify-center flex-shrink-0">

    <FaShieldAlt className="text-[#C8A348] text-xl" />

  </div>

  <div>

    <h3 className="text-xl font-bold text-[#081F4D] leading-none">
      15+ Years
    </h3>

    <p className="text-sm text-gray-600 mt-1 leading-5">
      Trusted accounting services across Canada.
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