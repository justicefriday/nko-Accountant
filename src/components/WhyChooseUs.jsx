import { motion } from "framer-motion";
import whyChooseUs from "../data/whyChooseUs";
import { fadeUp } from "../utils/animation";

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          {...fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[2px] sm:tracking-[3px] text-[#C9A227] font-semibold text-xs sm:text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3B73] leading-tight px-2">
            Service You Can Trust
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed sm:leading-8 text-sm sm:text-base lg:text-lg px-2">
            We provide timely, accurate, and reliable information
            that helps you see and understand your business in a snapshot.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-8 mt-10 sm:mt-16">

          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                {...fadeUp}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -10 }}
                className="group bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl hover:border-[#C9A227] transition-all duration-500 text-center"
              >
                {/* Icon */}
                <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EEF4FB] flex items-center justify-center group-hover:bg-[#0F3B73] transition duration-500">
                  <Icon className="text-3xl sm:text-4xl text-[#0F3B73] group-hover:text-[#C9A227] transition duration-500" />
                </div>

                {/* Title */}
                <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold text-[#0F3B73]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 sm:mt-5 text-gray-600 leading-relaxed sm:leading-8 text-sm sm:text-base">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;