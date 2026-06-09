function Weather() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Weather Intelligence
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Stay informed with weather insights for better farming decisions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Today's Weather</h3>
            <p className="text-3xl font-bold text-green-700">28°C</p>
            <p className="text-gray-600 mt-2">Partly Cloudy</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Rain Probability</h3>
            <p className="text-3xl font-bold text-blue-600">65%</p>
            <p className="text-gray-600 mt-2">Expected in next 24 hours</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Humidity</h3>
            <p className="text-3xl font-bold text-cyan-600">72%</p>
            <p className="text-gray-600 mt-2">Suitable for crop growth</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Weather;