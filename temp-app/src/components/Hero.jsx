function Hero() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-green-50 to-green-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            Welcome to EnaFarms 🌱
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Tech Behind
            <span className="text-green-700"> Every Harvest</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Empowering farmers with weather intelligence, market
            insights, government schemes, and modern agricultural
            solutions from seed to market.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-green-700 text-white px-7 py-3 rounded-xl hover:bg-green-800 transition shadow-lg">
              Get Started
            </button>

            <button className="border-2 border-green-700 text-green-700 px-7 py-3 rounded-xl hover:bg-green-100 transition">
              Explore Services
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-green-700">
                10K+
              </h3>
              <p className="text-sm text-gray-600">
                Farmers
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-green-700">
                500+
              </h3>
              <p className="text-sm text-gray-600">
                Villages
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold text-green-700">
                100+
              </h3>
              <p className="text-sm text-gray-600">
                Crops
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
            alt="Farm"
            className="rounded-3xl shadow-2xl w-full max-w-xl hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;