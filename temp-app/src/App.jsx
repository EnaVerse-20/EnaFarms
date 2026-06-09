import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Weather from "./components/Weather";
import Schemes from "./components/Schemes";
import Marketplace from "./components/marketPlace";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Services/>
      <Weather/>
      <Schemes/>
      <Marketplace/>
      <Footer/>
    </>
  );
}

export default App;