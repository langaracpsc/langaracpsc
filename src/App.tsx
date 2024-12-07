import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutUs from "./pages/about-us/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the About page */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
