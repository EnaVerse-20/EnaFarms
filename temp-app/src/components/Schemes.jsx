function Schemes() {
  const schemes = [
    {
      icon: "💰",
      title: "PM-KISAN",
      description: "Income support provided directly to eligible farmers."
    },
    {
      icon: "🛡️",
      title: "PMFBY",
      description: "Crop insurance scheme protecting farmers from losses."
    },
    {
      icon: "🌱",
      title: "Soil Health Card",
      description: "Provides information about soil nutrients and quality."
    },
    {
      icon: "🏦",
      title: "Kisan Credit Card",
      description: "Easy access to agricultural credit and loans."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Government Schemes
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Explore important government initiatives for farmers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-100 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-5">
                {scheme.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {scheme.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {scheme.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Schemes;