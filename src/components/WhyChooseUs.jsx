import { motion } from "framer-motion";
import whyChooseUs from "../data/whyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-red-600 font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-blue-950">
            Why Businesses Trust
            <br />
            N.K.O Accounting
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-8">
            We combine experience, technology and personalized service
            to provide accounting solutions you can rely on.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {whyChooseUs.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: .3
                }}
                className="bg-white rounded-3xl shadow-lg p-8 text-center group hover:bg-blue-950 transition-all duration-500"
              >

                <div className="w-20 h-20 rounded-full bg-red-100 mx-auto flex items-center justify-center group-hover:bg-red-600 transition">

                  <Icon className="text-red-600 text-4xl group-hover:text-white transition"/>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-blue-950 group-hover:text-white">

                  {item.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-7 group-hover:text-gray-300">

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