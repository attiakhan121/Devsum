import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import Coursespage from "../pages/CoursesPage";
import ProjectDetail from "../pages/ProjectDetailsPage";
import CoursesDetail from "../pages/CoursesDetailsPage";
import ScrollUp from "../components/ScrollUp";
import ScrollToTop from "../components/ScrollToTop";
import ProjectsPage from "../pages/ProjectsPage";
import NotFound from "../components/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<Coursespage />} />
        <Route path="/courses/:id" element={<CoursesDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      <ScrollUp />
    </BrowserRouter>
  );
};

export default AppRoutes;
