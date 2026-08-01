import statistics from "../data/statistics";
import { motion } from "framer-motion";

const Statistics = () => {
  return (
    <section className="bg-[#081F4D] py-12 lg:py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {statistics.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4"
              >

                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">

                  <Icon className="text-[#C8A348] text-3xl" />

                </div>

                {/* Text */}

                <div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-white">

                    {item.number}
                    {item.suffix}

                  </h2>

                  <p className="mt-1 text-gray-300 text-sm lg:text-base leading-6">

                    {item.title}

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Statistics;