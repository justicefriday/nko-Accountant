import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { fadeUp } from "../utils/animation";
import aboutImage from "../image/pics.jpg";

const features = [
  "Professional Bookkeeping",
  "GST/HST Filing",
  "Personal Tax Returns",
  "Corporate Tax Returns",
];

const About = () => {
  return (
    <section
      id="about"
       className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

     <motion.div
  {...fadeUp}
  className="relative order-2 lg:order-1 pb-24 lg:pb-0"
>
  <div className="relative max-w-xl mx-auto">

    {/* Gold Accent */}
    <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full rounded-3xl bg-[#C8A24A]"></div>

    {/* Image */}
    <img
      src={aboutImage}
      alt="N.K.O Accounting"
      className="relative z-10 w-full h-auto rounded-3xl shadow-2xl object-cover"
    />

    {/* Since Badge */}
    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-white rounded-xl shadow-lg px-4 py-3">

      <p className="text-[11px] uppercase tracking-widest text-[#C8A24A] font-semibold">
        Since
      </p>

      <h3 className="text-xl sm:text-2xl font-bold text-[#0B2341]">
        2010
      </h3>

    </div>

    {/* Floating Card */}

    <div
      className="
        absolute
        left-1/2
        -translate-x-1/2
        -bottom-16
        lg:left-8
        lg:translate-x-0
        lg:-bottom-10
        z-20
        bg-white
        rounded-2xl
        shadow-2xl
        p-5
        w-[92%]
        sm:w-[360px]
      "
    >

      <div className="flex items-start gap-4">

        <div className="w-14 h-14 rounded-xl bg-[#0B2341] flex items-center justify-center flex-shrink-0">

          <FaShieldAlt className="text-white text-2xl" />

        </div>

        <div>

          <h3 className="font-bold text-[#0B2341] text-lg">
            Trusted Financial Partner
          </h3>

          <p className="text-sm text-gray-500 mt-1 leading-6">
            Delivering accurate Accounting and tax solutions with integrity.
          </p>

        </div>

      </div>

    </div>

  </div>
</motion.div>

          {/* RIGHT */}

          <motion.div
            {...fadeUp}
            className="order-1 lg:order-2"
          >

            <span className="uppercase tracking-[4px] text-[#C8A24A] font-semibold text-sm">

              About Us

            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2341] leading-tight">

              Helping Businesses
              <br />

             Build Lasting Growth

            </h2>

            <p className="mt-8 text-gray-600 leading-8">

              N.K.O Accounting Professional Corporation is tailored to meet the accounting needs of our clients.
              Our practice is geared toward eliminating inefficiencies, reducing downtime,
              and minimizing disruptions to your business.
              

            </p>

            <p className="mt-5 text-gray-600 leading-8">

              Our personnel include accountants with vast knowledge in accounts payable, receivable and
              with experiences that span various aspects of the business
              including Operations to ensure proper coding and adjustment of payables.
              
          Our accountant has over 15 years property accounting experience and have worked for the major
      corporations like Knightstone Capital Management, GE Finance, Scotia Bank Plaza, Bentall
      Kennedy, Arcturus Property Management and Cadillac Fairview Corporation.

            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10 mt-10">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3"
                >

                  <FaCheckCircle className="text-[#C8A24A] text-xl"/>

                  <span className="text-[#0B2341] font-medium">

                    {feature}

                  </span>

                </div>

              ))}

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-6 mt-12 py-8 border-y border-gray-200 text-center"> 

              <div>

                <h3 className="text-3xl font-bold text-[#0B2341]">

                  15+

                </h3>

                <p className="text-gray-500 mt-2 text-sm">

                  Years Experience

                </p>

              </div> 

               <div>

                <h3 className="text-3xl font-bold text-[#0B2341]">

                  500+

                </h3>

                <p className="text-gray-500 mt-2 text-sm">

                  Happy Clients

                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-[#0B2341]">

                  1000+

                </h3>

                <p className="text-gray-500 mt-2 text-sm">

                  Tax Returns

                </p>

              </div> 

            </div>

            {/* Button */}

            <div className="mt-10 flex justify-center lg:justify-start">

             <Link to="contact" smooth={true} duration={600}  offset={-80} className=" inline-flex items-center gap-3 px-8
    py-4
    rounded-xl
    bg-[#0B2341]
    hover:bg-[#16385C]
    text-white
    font-semibold
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-1
"
>

Request Consultation

<FaArrowRight />

</Link>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;