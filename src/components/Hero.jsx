const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-r from-blue-950 to-blue-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 min-h-screen grid lg:grid-cols-2 items-center gap-10">

        {/* Left */}
        <div>

          <span className="border border-red-500 rounded-full px-5 py-2 text-sm">
            Your Success, Our Expertise
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold mt-8 leading-tight">
            Professional Accounting
            <br />
            Solutions for
            <br />
            <span className="text-red-500">
              Individuals & Businesses
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-8">
            Helping businesses and individuals manage finances,
            stay compliant and achieve financial success through
            bookkeeping, tax solutions and personalized support.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">
            <button className="bg-red-600 px-8 py-4 rounded-lg hover:bg-red-700 transition">
              Book Consultation
            </button>

            <button className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition">
              Our Services
            </button>
          </div>

        </div>

        {/* Right */}
        <div>

          <img
            src="/src/image/hero2.jpg"
            alt="Accountant"
            className="w-full rounded-2xl"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;