
import process from "../data/process";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { fadeUp } from "../utils/animation";
import { Link } from "react-scroll";


const Process = () => {
  return (
    <section
      id="process"
      className="py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          {...fadeUp}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[4px] text-red-600 font-semibold text-sm">

            Our Process

          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950">

            Getting Started Is Easy

          </h2>

          <p className="mt-6 text-gray-600 leading-8">

            From your first consultation to the final financial report,
            we make every step simple, transparent and stress-free.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Desktop Line */}

          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-200 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">

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
                  whileHover={{
                    y: -10,
                  }}
                  className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center border border-gray-100 hover:border-red-500 transition-all duration-500 z-10"
                >

                  {/* Number */}

                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold shadow-lg">

                    {step.id}

                  </div>

                  {/* Icon */}

                  <div className="mt-6 w-20 h-20 rounded-full bg-blue-950 mx-auto flex items-center justify-center group">

                    <Icon className="text-white text-3xl" />

                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-2xl font-bold text-blue-950">

                    {step.title}

                  </h3>

                  {/* Text */}

                  <p className="mt-4 text-gray-600 leading-7">

                    {step.text}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          {...fadeUp}
          className="mt-24 bg-blue-950 rounded-3xl p-10 lg:p-14 text-center text-white shadow-2xl"
        >

          <h2 className="text-3xl lg:text-4xl font-bold">

            Ready To Simplify Your Accounting?

          </h2>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto leading-8">

            Let our experienced team handle your bookkeeping,
            tax filing and accounting while you focus on growing
            your business.

          </p>

          <Link
  to="contact"
  smooth={true}
  duration={600}
  offset={-80}
  className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 mx-auto cursor-pointer transition-all duration-300 hover:scale-105 w-fit"
>
  Book a Free Consultation
  <FaArrowRight />
</Link>

        </motion.div>

      </div>
    </section>
  );
};

export default Process;