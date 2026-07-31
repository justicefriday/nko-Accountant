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


import services from "../data/services";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { fadeUp } from "../utils/animation";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          {...fadeUp}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[4px] text-red-600 font-semibold text-sm">

            Our Services

          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950">

            Professional Accounting
            Solutions

          </h2>

          <p className="mt-6 text-gray-600 leading-8">

            We provide reliable bookkeeping, tax and accounting
            services tailored to help individuals and businesses
            stay financially organized.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.id}
                {...fadeUp}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-red-500 transition-all duration-500 overflow-hidden flex flex-col"
              >

                {/* Top Border */}

                <div className="absolute top-0 left-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>

                {/* Icon */}

                <div className="w-20 h-20 rounded-2xl bg-red-100 flex items-center justify-center mx-auto lg:mx-0 group-hover:bg-red-600 transition-all duration-500">

                  <Icon className="text-red-600 text-4xl group-hover:text-white transition-all duration-500"/>

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-blue-950 text-center lg:text-left">

                  {service.title}

                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-600 leading-8 text-center lg:text-left flex-grow">

                  {service.description}

                </p>

                {/* Button */}

                <button className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-red-600 font-semibold hover:gap-4 transition-all duration-300">

                  Learn More

                  <FaArrowRight/>

                </button>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Services;