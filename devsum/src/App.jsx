import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Button from "./components/Button";
import Loader from "./components/Loader";
import FormInput from "./components/FormInput";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar"; 
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ContactUs from "./pages/ContactUs";
import "./index.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;