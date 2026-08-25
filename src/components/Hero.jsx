// import { motion } from "framer-motion";
// import { FaArrowRight, FaPlay, FaShieldAlt } from "react-icons/fa";
// import { Link } from "react-scroll";
// import { fadeUp } from "../utils/animation";
// import heroImage from "../image/hero2.jpg";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center overflow-hidden pt-28 pb-12 bg-gradient-to-br from-[#081F4D] via-[#0D2F6B] to-[#123C87]"
//     >
//       <div className="max-w-7xl mx-auto px-6 w-full">

//         <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

//           {/* LEFT */}

//           <motion.div {...fadeUp}>

//             <span className="inline-flex items-center rounded-full bg-[#C8A348] text-[#081F4D] px-5 py-2 text-sm font-semibold tracking-wider uppercase">
//               Trusted Accounting Professionals
//             </span>

//             <h1 className="mt-8 text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">

//               Professional Accounting

//               <span className="block text-[#C8A348]">
//                 Solutions
//               </span>

//               You Can Trust

//             </h1>

//             <p className="mt-8 max-w-xl text-gray-200 text-lg leading-8">

//               Helping businesses and individuals stay financially
//               organized through bookkeeping, taxation, financial
//               reporting and trusted professional advice.

//             </p>

//             <div className="mt-10 flex flex-col sm:flex-row gap-5">

//               <Link
//                 to="contact"
//                 smooth
//                 duration={600}
//                 offset={-80}
//                 className="cursor-pointer bg-[#C8A348] hover:bg-[#B48E33] text-[#081F4D] font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl"
//               >
//                 Request Consultation

//                 <FaArrowRight />

//               </Link>

//               <Link
//                 to="services"
//                 smooth
//                 duration={600}
//                 offset={-80}
//                 className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white hover:text-[#081F4D] transition-all duration-300 hover:scale-105"
//               >

//                 <FaPlay />

//                 Our Services

//               </Link>

//             </div>

//           </motion.div>

//           {/* RIGHT */}

//           <motion.div
//             {...fadeUp}
//             transition={{
//               duration: 0.8,
//               delay: 0.2,
//             }}
//             className="relative mt-12 lg:mt-0"
//           >

//             <img
//               src={heroImage}
//               alt="Professional Accountant"
//               className="w-full rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,.35)] object-cover"
//             />

//             {/* Floating Card */}

//             <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 w-[90%] max-w-xs lg:max-w-sm">

//   <div className="w-12 h-12 rounded-full bg-[#081F4D] flex items-center justify-center flex-shrink-0">

//     <FaShieldAlt className="text-[#C8A348] text-xl" />

//   </div>

//   <div>

//     <h3 className="text-xl font-bold text-[#081F4D] leading-none">
//       15+ Years
//     </h3>

//     <p className="text-sm text-gray-600 mt-1 leading-5">
//       Trusted accounting services across Canada.
//     </p>

//   </div>

// </div>
//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import { fadeUp } from "../utils/animation";
import heroImage from "../image/hero2.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Background Shapes */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -top-28 -left-20 w-96 h-96 rounded-full bg-[#C8A348]/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-[#081F4D]/5 blur-3xl"></div>

      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}

          <motion.div {...fadeUp}>

            <span className="inline-flex items-center rounded-full bg-[#C8A348]/15 text-[#081F4D] px-5 py-2 text-sm font-semibold uppercase tracking-wider">

              Trusted Accounting Professionals

            </span>

            <h1 className="mt-8 text-[#081F4D] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">

              Reliable Accounting 

              <span className="block text-[#C8A348]">
                Solutions
              </span>

              You Can Trust

            </h1>

            <p className="mt-8 max-w-xl text-gray-600 text-lg leading-8">

              Dedicated to providing optimum services to clients.
              Helping business achieve  immediate and long-term Accounting
              needs using our unique strengths to attain that goal.

            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer bg-[#081F4D] hover:bg-[#10306B] text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >

                Request Consultation

                <FaArrowRight />

              </Link>

              <Link
                to="services"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer border-2 border-[#081F4D] text-[#081F4D] hover:bg-[#081F4D] hover:text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1"
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
              duration: .8,
              delay: .2,
            }}
            className="relative mt-12 lg:mt-0"
          >

            {/* Gold Background Block */}

            <div className="absolute -top-6 -right-6 w-full h-full rounded-[35px] bg-[#C8A348]"></div>

            {/* Image */}

            <img
              src={heroImage}
              alt="Professional Accountant"
              className="relative z-10 w-full rounded-[35px] object-cover shadow-[0_30px_70px_rgba(8,31,77,.18)]"
            />

            {/* Top Floating Card */}

            <div className="hidden lg:flex absolute top-8 -left-12 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#C8A348]/20 flex items-center justify-center">

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

            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 z-20 bg-white rounded-2xl shadow-2xl border border-gray-100 px-6 py-5 flex items-center gap-4 w-[92%] max-w-sm">

              <div className="w-14 h-14 rounded-2xl bg-[#081F4D] flex items-center justify-center flex-shrink-0">

                <FaShieldAlt className="text-[#C8A348] text-2xl"/>

              </div>

              <div>

                <h3 className="text-xl font-bold text-[#081F4D]">

                  15+ Years

                </h3>

                <p className="text-sm text-gray-600 mt-1">

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