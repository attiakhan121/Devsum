import React from 'react'; // Make sure React is imported if not already
import "./App.css";
import Button from "./components/Button";
import Loader from "./components/Loader";
import FormInput from "./components/FormInput";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar"; 
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import "./index.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />


    </>
  );
}

export default App;