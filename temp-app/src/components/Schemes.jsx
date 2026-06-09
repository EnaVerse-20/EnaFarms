function Schemes() {
  const schemes = [
    {
      title: "PM-KISAN",
      description: "Income support provided directly to eligible farmers."
    },
    {
      title: "PMFBY",
      description: "Crop insurance scheme protecting farmers from losses."
    },
    {
      title: "Soil Health Card",
      description: "Provides information about soil nutrients and quality."
    },
    {
      title: "Kisan Credit Card",
      description: "Easy access to agricultural credit and loans."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Government Schemes
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Explore important government initiatives for farmers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-green-700 mb-3">
                {scheme.title}
              </h3>

              <p className="text-gray-600">
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