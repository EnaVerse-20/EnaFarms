function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-green-700">
            EnaFarms
          </h1>
          <p className="text-xs text-gray-500">
            Tech Behind Every Harvest
          </p>
        </div>

        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <a href="#" className="hover:text-green-700 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-green-700 transition">
              Solutions
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-green-700 transition">
              Market
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-green-700 transition">
              Weather
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-green-700 transition">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-green-700 text-green-700 hover:bg-green-50 transition">
            Login
          </button>

          <button className="px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800 transition">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;