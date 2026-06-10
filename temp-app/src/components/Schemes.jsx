import {
  FaMoneyBillWave,
  FaShieldAlt,
  FaLeaf,
  FaUniversity,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Schemes() {
  const schemes = [
    {
      icon: <FaMoneyBillWave />,
      title: "PM-KISAN",
      description:
        "Income support provided directly to eligible farmers.",
    },
    {
      icon: <FaShieldAlt />,
      title: "PMFBY",
      description:
        "Crop insurance scheme protecting farmers from losses.",
    },
    {
      icon: <FaLeaf />,
      title: "Soil Health Card",
      description:
        "Provides information about soil nutrients and quality.",
    },
    {
      icon: <FaUniversity />,
      title: "Kisan Credit Card",
      description:
        "Easy access to agricultural credit and loans.",
    },
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
              className="bg-green-50 border border-green-100 rounded-3xl p-8 shadow-md hover:shadow-2xl"
            >
              <div className="text-5xl mb-5 text-green-700">
                {scheme.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {scheme.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {scheme.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Schemes;