import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import './App.css';

// Import your pages (create them if not already)

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/contact" element={<ContactUs />} />
     
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
