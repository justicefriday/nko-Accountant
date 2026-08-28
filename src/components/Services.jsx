import services from "../data/services";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { fadeUp } from "../utils/animation";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          {...fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[2px] sm:tracking-[3px] text-[#C9A227] font-semibold text-xs sm:text-sm">
            Our Services
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3B73] leading-tight px-2">
            Accounting Services That
            <br />
            Meet Your Business Needs
          </h2>

          <p className="mt-4 sm:mt-5 text-gray-600 leading-relaxed sm:leading-7 text-sm sm:text-base lg:text-lg px-2">
            From bookkeeping to tax planning, we provide reliable financial services to individuals
            and organizations aimed at maximizing growth while staying compliant.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7 lg:gap-8 mt-8 sm:mt-10">

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
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200 transition-all duration-500 flex flex-col"
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
                      w-16 h-16 sm:w-20 sm:h-20
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
                        text-3xl sm:text-4xl
                        transition-all duration-500
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-5 sm:mt-7
                      text-lg sm:text-xl lg:text-2xl
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
                      mt-3 sm:mt-5
                      text-gray-600
                      leading-relaxed sm:leading-7
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
                      mt-5 sm:mt-7
                      flex items-center
                      justify-center lg:justify-start
                      gap-2
                      font-semibold
                      text-sm sm:text-base
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