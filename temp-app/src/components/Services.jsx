import {
  FaCloudSun,
  FaChartLine,
  FaSeedling,
  FaUniversity,
  FaTractor,
  FaUsers,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: <FaCloudSun />,
      title: "Weather Intelligence",
      description: "Real-time weather forecasts and farming alerts.",
    },
    {
      icon: <FaChartLine />,
      title: "Market Prices",
      description: "Track mandi rates and market trends instantly.",
    },
    {
      icon: <FaSeedling />,
      title: "Crop Advisory",
      description: "Expert recommendations for better crop yield.",
    },
    {
      icon: <FaUniversity />,
      title: "Government Schemes",
      description: "Access farmer benefits and subsidy programs.",
    },
    {
      icon: <FaTractor />,
      title: "Modern Farming Tools",
      description: "Smart technology solutions for agriculture.",
    },
    {
      icon: <FaUsers />,
      title: "Farmer Community",
      description: "Connect, learn and grow with fellow farmers.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Everything a farmer needs, from seed to market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;