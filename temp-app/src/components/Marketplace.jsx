function Marketplace() {
  const products = [
    {
      title: "Seeds",
      description: "High-quality seeds for better crop production."
    },
    {
      title: "Fertilizers",
      description: "Nutrient-rich fertilizers for healthy crops."
    },
    {
      title: "Equipment",
      description: "Modern farming tools and machinery."
    },
    {
      title: "Sell Crops",
      description: "Connect directly with buyers and markets."
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Marketplace
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Buy farming essentials and sell crops efficiently.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-green-700 mb-3">
                {product.title}
              </h3>

              <p className="text-gray-600">
                {product.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Marketplace;