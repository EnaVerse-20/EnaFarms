function Weather() {
  const weatherData = [
    {
      icon: "☀️",
      title: "Today's Weather",
      value: "28°C",
      description: "Partly cloudy with pleasant conditions."
    },
    {
      icon: "🌧️",
      title: "Rain Probability",
      value: "65%",
      description: "Expected rainfall within the next 24 hours."
    },
    {
      icon: "💧",
      title: "Humidity",
      value: "72%",
      description: "Suitable moisture level for crop growth."
    }
  ];

  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Weather Intelligence
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Stay informed with weather insights for better farming decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {weatherData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-green-100 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-4xl font-bold text-green-700 mb-4">
                {item.value}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Weather;