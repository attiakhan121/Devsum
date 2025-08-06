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
import Auth from './pages/Auth';
import DevsumDiaries from './pages/DevsumDiaries'
import "./index.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Coursespage from "./pages/CoursesPage";
import ProjectDetail from "./pages/ProjectDetailsPage";
import CoursesDetail from "./pages/CoursesDetailsPage";
import ScrollUp from "./components/ScrollUp";
import ScrollToTop from "./components/ScrollToTop";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from './Pages/TeamsPage';

function App() {
 return (
 <>
    <Router>
         <Navbar />
         <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactUs />} />
          <Route path="/team" element={<TeamPage />} />
            <Route path="/devsumdiaries" element={<DevsumDiaries />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/courses" element={<Coursespage />} />
            <Route path="/courses/:id" element={<CoursesDetail />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} /> 
            </Routes>
            <ScrollUp />
            <Footer />
      </Router>
 </>
);
}

export default App;