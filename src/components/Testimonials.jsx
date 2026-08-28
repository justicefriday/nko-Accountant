// import testimonials from "../data/testimonials";
// import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa";

// const Testimonials = () => {
//   return (
//     <section className="py-24 bg-slate-50">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}

//         <div className="text-center mb-16">

//           <span className="uppercase tracking-widest text-red-600 font-semibold">
//             Testimonials
//           </span>

//           <h2 className="mt-4 text-4xl md:text-5xl font-bold text-blue-950">
//             What Our Clients Say
//           </h2>

//           <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
//             Our clients trust us because we deliver reliable accounting,
//             bookkeeping and tax services with professionalism.
//           </p>

//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {testimonials.map((item, index) => (

//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: .5,
//                 delay: index * .2,
//               }}
//               viewport={{ once: true }}
//               className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500"
//             >

//               <div className="flex text-yellow-400 mb-6">

//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i}/>
//                 ))}

//               </div>

//               <p className="text-gray-600 leading-8 italic">

//                 "{item.review}"

//               </p>

//               <div className="flex items-center gap-4 mt-8">

//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 rounded-full object-cover"
//                 />

//                 <div>

//                   <h4 className="font-bold text-blue-950">

//                     {item.name}

//                   </h4>

//                   <p className="text-gray-500 text-sm">

//                     {item.company}

//                   </p>

//                 </div>

//               </div>

//             </motion.div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Testimonials;


import testimonials from "../data/testimonials";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { fadeUp } from "../utils/animation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          {...fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[3px] text-[#C8A24A] font-semibold text-xs sm:text-sm">
            Testimonials
          </span>

          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2341] leading-tight px-2">
            What Our Clients Say
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base lg:text-lg px-2">
            Our commitment to professionalism, accuracy and
            exceptional client service has earned the trust of
            businesses and individuals across Canada.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            className="!pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-[#C8A24A] shadow-lg hover:shadow-2xl p-5 sm:p-6 lg:p-7 h-full flex flex-col"
                >
                  {/* Quote icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#EEF4FB] flex items-center justify-center flex-shrink-0">
                    <FaQuoteLeft className="text-[#C8A24A] text-xl sm:text-2xl" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-3 sm:mt-4">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className="text-[#C8A24A] text-sm sm:text-base"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed sm:leading-7 italic flex-grow text-sm sm:text-base">
                    "{item.review}"
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200 my-5 sm:my-6"></div>

                  {/* Client */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B2341] flex items-center justify-center flex-shrink-0 border-4 border-[#EEF4FB]">
                      <span className="text-white font-bold text-sm sm:text-base">
                        {item.name.charAt(0)}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-bold text-[#0B2341] text-sm sm:text-base truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#C8A24A] font-medium mt-0.5 truncate">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;