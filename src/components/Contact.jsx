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
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
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
      title: "Business Hours",
      text: "Monday - Friday • 9:00 AM - 5:00 PM",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}

        <motion.div
          {...fadeUp}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[3px] text-[#C8A24A] font-semibold text-sm">

            Contact Us

          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2341] leading-tight">

            Let's Discuss Your
            Financial Needs

          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-base sm:text-lg">

            Whether you need bookkeeping, tax services or accounting
            support, our team is ready to help.

          </p>

        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-16">

          {/* Left */}

          <motion.div
            {...fadeUp}
            className="space-y-6"
          >

            {contactInfo.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                className="flex items-center gap-5 bg-white rounded-3xl p-6 border border-gray-200 hover:border-[#C8A24A] shadow-md hover:shadow-xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#EEF4FB] flex items-center justify-center text-[#0B2341] text-2xl flex-shrink-0">

                  {item.icon}

                </div>

                <div>

                  <h3 className="text-lg font-bold text-[#0B2341]">

                    {item.title}

                  </h3>

                  <p className="mt-1 text-gray-600">

                    {item.text}

                  </p>

                </div>

              </motion.div>

            ))}

            {/* Map */}

            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Toronto,Ontario&output=embed"
                className="w-full h-72 sm:h-80 border-0"
                loading="lazy"
              ></iframe>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div {...fadeUp}>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-6 sm:p-8 lg:p-10">

              <span className="text-[#C8A24A] uppercase font-semibold tracking-wider text-sm">

                Send a Message

              </span>

              <h3 className="mt-3 text-3xl font-bold text-[#0B2341]">

                We'd Love To Hear From You

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                Complete the form below and one of our accounting
                professionals will contact you shortly.

              </p>

              <form className="space-y-5 mt-8">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#C8A24A] focus:ring-2 focus:ring-[#C8A24A]/20 outline-none transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#C8A24A] focus:ring-2 focus:ring-[#C8A24A]/20 outline-none transition"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#C8A24A] focus:ring-2 focus:ring-[#C8A24A]/20 outline-none transition"
                />

                <textarea
                  rows="6"
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 resize-none focus:border-[#C8A24A] focus:ring-2 focus:ring-[#C8A24A]/20 outline-none transition"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#0B2341] hover:bg-[#16385C] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1"
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