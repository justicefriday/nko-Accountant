import process from "../data/process";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import { fadeUp } from "../utils/animation";

const Process = () => {
  return (
    <section
      id="process"
      className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          {...fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[2px] sm:tracking-[3px] text-[#C8A24A] font-semibold text-xs sm:text-sm">
            Our Process
          </span>

          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2341] leading-tight px-2">
            Transparent Process
            <br />
            Long lasting outcome
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 px-2">
            We've simplified our workflow to make your Accounting
            experience straightforward, transparent and stress-free.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20">

          {/* Desktop Line */}
          <div className="hidden xl:block absolute top-14 left-[12%] right-[12%] h-[3px] bg-[#C8A24A]/30"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 relative">

            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  {...fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  whileHover={{ y: -8 }}
                  className="relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-[#C8A24A] shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 text-center z-10"
                >
                  {/* Number */}
                  <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#C8A24A] text-white font-bold text-sm sm:text-base flex items-center justify-center shadow-lg">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="mt-5 sm:mt-6 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EEF4FB] mx-auto flex items-center justify-center">
                    <Icon className="text-3xl sm:text-4xl text-[#0B2341]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 sm:mt-7 text-xl sm:text-2xl font-bold text-[#0B2341]">
                    {step.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed sm:leading-8 text-sm sm:text-base">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          className="mt-16 sm:mt-20 lg:mt-24 bg-[#0B2341] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl"
        >
          <div className="px-5 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16 text-center">

            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#C8A24A]/20 text-[#C8A24A] text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Let's Get Started
            </span>

            <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight px-2">
              Ready to Simplify
              <br />
              Your Accounting?
            </h2>

            <p className="mt-4 sm:mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed sm:leading-8 text-sm sm:text-base lg:text-lg px-2">
              Whether you need bookkeeping, tax preparation or
              complete Accounting support, we're here to help
              your business succeed.
            </p>

            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 bg-[#C8A24A] hover:bg-[#b7923f] text-[#0B2341] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg text-sm sm:text-base"
            >
              Request Consultation
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;