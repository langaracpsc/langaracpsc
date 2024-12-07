import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutUs from "./pages/about-us/AboutUs";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
