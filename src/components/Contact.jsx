import { useState } from "react";
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
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      text: "+1 289-803-6886",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "Nk@nkoaccounting.com",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xzebapbj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 lg:py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          {...fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[2px] sm:tracking-[3px] text-[#C8A24A] font-semibold text-xs sm:text-sm">
            Contact Us
          </span>

          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2341] leading-tight px-2">
            Let's Discuss Your
            Financial Needs
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed sm:leading-8 text-sm sm:text-base lg:text-lg px-2">
            Our team is at your service, for all your Accounting needs.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 mt-10 sm:mt-16">

          {/* Left */}
          <motion.div
            {...fadeUp}
            className="space-y-5 sm:space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 sm:gap-5 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200 hover:border-[#C8A24A] shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#EEF4FB] flex items-center justify-center text-[#0B2341] text-lg sm:text-2xl flex-shrink-0">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2341]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 sm:mt-1 text-gray-600 text-sm sm:text-base break-words">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Toronto,Ontario&output=embed"
                className="w-full h-56 sm:h-72 md:h-80 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div {...fadeUp}>
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-2xl p-5 sm:p-8 lg:p-10">

              <span className="text-[#C8A24A] uppercase font-semibold tracking-wider text-xs sm:text-sm">
                Send a Message
              </span>

              <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B2341]">
                We'd Love To Hear From You
              </h3>

              <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed sm:leading-7 text-sm sm:text-base">
                Complete the form below and one of our Accounting
                professionals will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 mt-6 sm:mt-8">

                {/* Honeypot field to reduce spam - hidden from real users */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base focus:border-[#C8A24A] focus:ring-2 focus:ring-[#C8A24A]/20 outline-none transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base focus:border-[#C8A24A] focus:ring-2 focus:ring-[#C8A24A]/20 outline-none transition"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-300 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base focus:border-[#C8A24A] focus:ring-2 focus:ring-[#C8A24A]/20 outline-none transition"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base resize-none focus:border-[#C8A24A] focus:ring-2 focus:ring-[#C8A24A]/20 outline-none transition"
                ></textarea>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#0B2341] hover:bg-[#16385C] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && <FaArrowRight />}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-sm text-center font-medium">
                    Thank you! Your message has been sent — we'll be in touch shortly.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-600 text-sm text-center font-medium">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;