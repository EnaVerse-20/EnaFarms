function Services() {
  const services = [
    {
      title: "Weather Intelligence",
      description: "Real-time weather updates and forecasts."
    },
    {
      title: "Market Prices",
      description: "Track crop prices and market trends."
    },
    {
      title: "Crop Advisory",
      description: "Expert guidance for better farming decisions."
    },
    {
      title: "Government Schemes",
      description: "Latest agricultural schemes and benefits."
    },
    {
      title: "Modern Farming Tools",
      description: "Technology-driven solutions for farmers."
    },
    {
      title: "Farmer Community",
      description: "Connect and learn from other farmers."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Everything a farmer needs, from seed to market.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border"
            >
              <h3 className="text-xl font-bold text-green-700 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;