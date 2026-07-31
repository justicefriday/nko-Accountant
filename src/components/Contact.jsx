import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { fadeUp } from "../utils/animation";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          {...fadeUp}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[4px] text-red-600 font-semibold text-sm">

            Contact Us

          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950">

            Let's Discuss Your
            Accounting Needs

          </h2>

          <p className="mt-6 text-gray-600 leading-8">

            Need bookkeeping, tax filing or accounting services?
            Reach out today and we'll be happy to help.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 mt-20">

          {/* LEFT */}

          <motion.div
            {...fadeUp}
            className="space-y-6"
          >

            {[
              {
                icon: <FaPhoneAlt />,
                title: "Call Us",
                text: "+1 (416) 666-5694",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                text: "info@nkoaccounting.ca",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Office",
                text: "Toronto, Ontario, Canada",
              },
              {
                icon: <FaClock />,
                title: "Working Hours",
                text: "Mon - Fri | 9:00 AM - 5:00 PM",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-5 hover:border-red-500 border border-transparent transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 text-2xl flex-shrink-0">

                  {item.icon}

                </div>

                <div>

                  <h3 className="font-bold text-blue-950 text-xl">

                    {item.title}

                  </h3>

                  <p className="text-gray-600 mt-2">

                    {item.text}

                  </p>

                </div>

              </motion.div>

            ))}

            {/* Google Map Placeholder */}

            <div className="overflow-hidden rounded-3xl shadow-xl mt-8">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Toronto,Ontario&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
              ></iframe>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            {...fadeUp}
          >

            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">

              <h3 className="text-3xl font-bold text-blue-950">

                Send Us A Message

              </h3>

              <p className="text-gray-600 mt-3 mb-8">

                Fill out the form below and we'll get back to you
                as soon as possible.

              </p>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-gray-300 p-4 focus:border-red-600 outline-none transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-300 p-4 focus:border-red-600 outline-none transition"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-300 p-4 focus:border-red-600 outline-none transition"
                />

                <textarea
                  rows="6"
                  placeholder="Tell us about your accounting needs..."
                  className="w-full rounded-xl border border-gray-300 p-4 focus:border-red-600 outline-none transition resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:gap-5"
                >

                  Send Message

                  <FaArrowRight />

                </button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;