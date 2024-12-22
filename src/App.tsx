import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { useEventStore } from "@/store/eventStore";

import AboutUs from "./pages/about-us/AboutUs";
import Events from "./pages/events/Events";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";

function App() {
  const { fetchEvents } = useEventStore();

  useEffect(() => {
    fetchEvents();
    const eventsInterval = setInterval(() => {
      fetchEvents();
    }, 300000);

    return () => {
      clearInterval(eventsInterval);
    };
  }, [fetchEvents]);

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
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
