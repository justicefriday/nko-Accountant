// import services from "../data/services";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Services = () => {
//   const topServices = services.slice(0, 3);
//   const bottomServices = services.slice(3);

//   return (
//     <section id="services" className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">

//           <span className="text-red-600 font-semibold uppercase tracking-widest">
//             What We Do
//           </span>

//           <h2 className="mt-3 text-4xl md:text-5xl font-bold text-blue-950">
//             Our Professional Services
//           </h2>

//           <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
//             We provide reliable accounting and taxation services
//             designed to help individuals and businesses achieve
//             financial clarity, compliance, and long-term success.
//           </p>

//           <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

//         </div>

//         {/* Top Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {topServices.map((service) => {

//             const Icon = service.icon;

//             return (
//               <motion.div
//                 key={service.id}
//                 whileHover={{ y: -10, scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-500 p-8 text-center lg:text-left"
//               >
//                 {/* Icon */}
//                 <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto lg:mx-0">
//                   <Icon className="text-red-600 text-3xl" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="mt-6 text-xl font-bold text-blue-950">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-4 text-gray-600 leading-7">
//                   {service.description}
//                 </p>

//                 {/* Button */}
//                 <button className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-red-600 font-semibold mx-auto lg:mx-0 hover:gap-3 transition-all duration-300">
//                   Learn More
//                   <FaArrowRight />
//                 </button>
//               </motion.div>
//             );

//           })}

//         </div>

//         {/* Bottom Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:w-2/3 lg:mx-auto">

//           {bottomServices.map((service) => {

//             const Icon = service.icon;

//             return (
//               <motion.div
//                 key={service.id}
//                 whileHover={{ y: -10, scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-500 p-8 text-center lg:text-left"
//               >
//                 {/* Icon */}
//                 <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto lg:mx-0">
//                   <Icon className="text-red-600 text-3xl" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="mt-6 text-xl font-bold text-blue-950">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-4 text-gray-600 leading-7">
//                   {service.description}
//                 </p>

//                 {/* Button */}
//                 <button className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-red-600 font-semibold mx-auto lg:mx-0 hover:gap-3 transition-all duration-300">
//                   Learn More
//                   <FaArrowRight />
//                 </button>
//               </motion.div>
//             );

//           })}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;


// import services from "../data/services";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";
// import { fadeUp } from "../utils/animation";
// import { Link } from "react-scroll";

// const Services = () => {
//   return (
//     <section id="services" className="py-14 lg:py-16 bg-slate-50">

//       <div className="max-w-6xl mx-auto px-5 sm:px-6">

//         {/* Heading */}

//         <motion.div
//           {...fadeUp}
//           className="text-center max-w-3xl mx-auto"
//         >

//           <span className="uppercase tracking-[3px] text-[#C9A227] font-semibold text-sm">

//             Our Services

//           </span>

//           <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3B73] leading-tight">

//             Accounting Solutions
//             <br />
//             Built Around Your Business

//           </h2>

//           <p className="mt-5 text-gray-600 leading-7 text-base sm:text-lg">

//             From bookkeeping to tax planning, we provide dependable
//             financial services that help individuals and businesses
//             stay compliant, organized and prepared for growth.

//           </p>

//         </motion.div>

//         {/* Cards */}

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

//           {services.map((service, index) => {

//             const Icon = service.icon;

//             return (

//               <motion.div
//   key={service.id}
//   {...fadeUp}
//   transition={{
//     duration: 0.5,
//     delay: index * 0.1,
//   }}
//   whileHover={{
//     y: -10,
//   }}
//   className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg border border-gray-200 transition-all duration-500 flex flex-col"
// >
//   {/* Animated Background */}

//   <div className="absolute left-0 bottom-0 w-full h-0 bg-[#0B2341] group-hover:h-full transition-all duration-500 ease-in-out z-0"></div>

//   <div className="relative z-10 flex flex-col h-full">

//     {/* Icon */}

//     <div className="w-20 h-20 rounded-2xl bg-[#EEF4FB] flex items-center justify-center mx-auto lg:mx-0 group-hover:bg-[#C8A24A] transition-all duration-500">

//       <Icon className="text-[#0B2341] text-4xl transition-all duration-500 group-hover:text-[#0B2341]" />

//     </div>

//     {/* Title */}

//     <h3 className="mt-8 text-2xl font-bold text-[#0B2341] text-center lg:text-left transition-all duration-500 group-hover:text-white">

//       {service.title}

//     </h3>

//     {/* Description */}

//     <p className="mt-5 leading-8 text-center lg:text-left flex-grow text-gray-600 transition-all duration-500 group-hover:text-gray-300">

//       {service.description}

//     </p>

//     {/* Button */}

//     <button className="mt-8 flex items-center justify-center lg:justify-start gap-2 font-semibold text-[#0B2341] transition-all duration-500 group-hover:text-[#C8A24A] hover:gap-4">

//       Learn More

//       <FaArrowRight />

//     </button>

//   </div>

// </motion.div>
//             );

//           })}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Services;

import services from "../data/services";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { fadeUp } from "../utils/animation";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <section
      id="services"
      className="py-14 sm:py-16 lg:py-20 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <motion.div
          {...fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[3px] text-[#C9A227] font-semibold text-sm">
            Our Services
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3B73] leading-tight">
            Accounting Services That

            <br />
            Meet Your Business Needs
          </h2>

          <p className="mt-5 text-gray-600 leading-7 text-base sm:text-lg">
            From bookkeeping to tax planning, we provide reliable financial services to individuals
            and organizations aimed at maximizing growth while staying compliant.
            
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-8 mt-10">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                {...fadeUp}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden bg-white rounded-3xl p-7 sm:p-8 shadow-lg border border-gray-200 transition-all duration-500 flex flex-col"
              >

                {/* Animated Background */}
                <div
                  className="
                    absolute left-0 bottom-0
                    w-full h-0
                    bg-[#0B2341]
                    group-hover:h-full
                    transition-all duration-500 ease-in-out
                    z-0
                  "
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">

                  {/* Icon */}
                  <div
                    className="
                      w-20 h-20
                      rounded-2xl
                      bg-[#EEF4FB]
                      flex items-center justify-center
                      mx-auto lg:mx-0
                      group-hover:bg-[#C8A24A]
                      transition-all duration-500
                    "
                  >
                    <Icon
                      className="
                        text-[#0B2341]
                        text-4xl
                        transition-all duration-500
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-7
                      text-xl sm:text-2xl
                      font-bold
                      text-[#0B2341]
                      text-center lg:text-left
                      transition-all duration-500
                      group-hover:text-white
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <div
                    className="
                      mt-5
                      text-gray-600
                      leading-7
                      text-sm sm:text-base
                      text-center lg:text-left
                      flex-grow
                      transition-all duration-500
                      group-hover:text-gray-300
                    "
                  >
                    {service.description}
                  </div>

                  {/* Learn More */}
                  <Link
                    to="contact"
                    smooth
                    duration={600}
                    offset={-80}
                    className="
                      mt-7
                      flex items-center
                      justify-center lg:justify-start
                      gap-2
                      font-semibold
                      text-[#0B2341]
                      group-hover:text-[#C8A24A]
                      transition-all duration-300
                      hover:gap-4
                      cursor-pointer
                    "
                  >
                    Learn More
                    <FaArrowRight />
                  </Link>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;