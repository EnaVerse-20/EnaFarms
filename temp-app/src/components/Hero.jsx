function Hero() {
  return (
    <section className="min-h-[90vh] bg-green-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <p className="text-green-700 font-semibold mb-3">
            Welcome to EnaFarms
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Tech Behind Every Harvest
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Empowering farmers with technology, weather insights,
            market intelligence, and modern agricultural solutions
            from seed to market.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
              Get Started
            </button>

            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100 transition">
              Explore Services
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
            alt="Farm"
            className="rounded-2xl shadow-xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;