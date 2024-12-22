import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutUs from "./pages/about-us/AboutUs";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
