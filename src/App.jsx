import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Progress from "./components/Progress";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`
        overflow-x-hidden
        font-gerbil
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-[#111] text-white"
            : "bg-[#f6f6f4] text-black"
        }
      `}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />

      <div className="mt-24">
        <About />
      </div>

      <div className="mt-24">
        <Progress />
      </div>

      <div className="mt-24">
        <Services />
      </div>

      <div className="mt-24">
        <Testimonials />
      </div>

      <div className="mt-24">
        <Newsletter darkMode={darkMode} />
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;