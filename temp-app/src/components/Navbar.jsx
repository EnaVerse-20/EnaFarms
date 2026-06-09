function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div>
          <h1 className="text-2xl font-bold">EnaFarms</h1>
          <p className="text-xs">Tech Behind Every Harvest</p>
        </div>

        <ul className="flex gap-6 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Market</a></li>
          <li><a href="#">Weather</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;