function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-green-400">
              EnaFarms
            </h2>

            <p className="mt-4 text-green-100">
              Empowering farmers with technology, weather intelligence,
              market insights, and modern agricultural solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-green-100">
              <li>Weather Intelligence</li>
              <li>Crop Advisory</li>
              <li>Market Prices</li>
              <li>Government Schemes</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Marketplace
            </h3>

            <ul className="space-y-2 text-green-100">
              <li>Seeds</li>
              <li>Fertilizers</li>
              <li>Equipment</li>
              <li>Sell Crops</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-green-100">
              <li>Email Support</li>
              <li>Farmer Helpline</li>
              <li>Community Support</li>
              <li>Partnerships</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-green-800 mt-12 pt-6 text-center text-green-200">
          © 2026 EnaFarms. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;