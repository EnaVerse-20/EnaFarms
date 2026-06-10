import {
  FaSeedling,
  FaFlask,
  FaTractor,
  FaShoppingBasket,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Marketplace() {
  const products = [
    {
      icon: <FaSeedling />,
      title: "Seeds",
      description: "High-quality seeds for better crop production.",
    },
    {
      icon: <FaFlask />,
      title: "Fertilizers",
      description: "Nutrient-rich fertilizers for healthy crops.",
    },
    {
      icon: <FaTractor />,
      title: "Equipment",
      description: "Modern farming tools and machinery.",
    },
    {
      icon: <FaShoppingBasket />,
      title: "Sell Crops",
      description: "Connect directly with buyers and markets.",
    },
  ];

  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Marketplace
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Buy farming essentials and sell crops efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-green-100 rounded-3xl p-8 shadow-md hover:shadow-2xl"
            >
              <div className="text-5xl mb-5 text-green-700">
                {product.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {product.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Marketplace;