// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="pt-20 bg-gradient-to-r from-blue-950 to-blue-800 text-white"
//     >
//       <div className="max-w-7xl mx-auto px-6 min-h-screen grid lg:grid-cols-2 items-center gap-10">

//         {/* Left */}
//         <div>

//           <span className="border border-red-500 rounded-full px-5 py-2 text-sm">
//             Your Success, Our Expertise
//           </span>

//           <h1 className="text-3xl lg:text-5xl font-bold mt-8 leading-tight">
//             Professional Accounting
//             <br />
//             Solutions for
//             <br />
//             <span className="text-red-500">
//               Individuals & Businesses
//             </span>
//           </h1>

//           <p className="mt-8 text-lg text-gray-300 leading-8">
//             Helping businesses and individuals manage finances,
//             stay compliant and achieve financial success through
//             bookkeeping, tax solutions and personalized support.
//           </p>

//           <div className="flex gap-5 mt-10 flex-wrap">
//             <button className="bg-red-600 px-8 py-4 rounded-lg hover:bg-red-700 transition">
//               Book Consultation
//             </button>

//             <button className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition">
//               Our Services
//             </button>
//           </div>

//         </div>

//         {/* Right */}
//         <div>

//           <img
//             src="/src/image/hero2.jpg"
//             alt="Accountant"
//             className="w-full rounded-2xl"
//           />

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaShieldAlt } from "react-icons/fa";
import { fadeUp } from "../utils/animation";
import heroImage from "../image/hero2.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 min-h-screen flex items-center overflow-hidden pt-28 pb-3"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div {...fadeUp}>

            <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full text-sm uppercase tracking-widest font-medium">
              Trusted Accounting Experts
            </span>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-8">
              Smart Accounting

              <span className="block text-red-500">
                For Modern
              </span>

              Businesses
            </h1>

            <p className="text-gray-300 mt-8 text-base md:text-lg leading-8 max-w-xl">
              Professional bookkeeping, GST/HST filing,
              personal tax returns, corporate tax services,
              and financial reporting designed to help your
              business grow with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105">

                Get Started

                <FaArrowRight />

              </button>

              <button className="border border-white text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white hover:text-blue-950 transition-all duration-300 hover:scale-105">

                <FaPlay />

                Learn More

              </button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >

            <img
              src={heroImage}
              alt="Professional Accountant"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-6 left-4 right-4 sm:left-8 sm:right-auto sm:w-72 bg-blue-950 text-white rounded-2xl shadow-2xl px-6 py-5 flex items-center gap-4 border border-white/10">

              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">

                <FaShieldAlt className="text-2xl" />

              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  15+ Years
                </h3>

                <p className="text-sm text-gray-300 mt-1">
                  Serving Canadian businesses with trusted accounting solutions.
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