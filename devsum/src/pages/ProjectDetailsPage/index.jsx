import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../ProjectsPage/projectData";
import TechIcon from "../../components/TechIcon";
import Button from "../../components/Button";
import Breadcrumb from "../../components/BreadCrumb";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-dark-blue">Project not found</p>
      </div>
    );
  }

  return (
    <main>
      <Breadcrumb
        pageName="Projects"
        detailPage="Project Details"
        url="/"
        description="Explore the full breakdown of the project and how it was built."
      />
      <div className="container  mt-6 lg:mt-0">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-md m-0 h-0 p-0 group"
            >
              <TechIcon
                name="move-left"
                className="transform transition-transform duration-300 group-hover:-translate-x-1"
              />{" "}
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="flex flex-col items-center md:flex-row gap-8 mb-12">
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-semibold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-soft-white mb-6">{project.description}</p>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-border-blue">Category:</span>
                <span className="font-medium text-soft-white">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-border-blue">Type:</span>
                <span className="font-medium text-soft-white">
                  {project.type}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-border-blue">Difficulty:</span>
                <span className="font-medium text-soft-white">
                  {project.difficulty}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-border-blue">Time:</span>
                <span className="font-medium text-soft-white">
                  {project.estimatedTime}
                </span>
              </div>
            </div>

            {/* External Links */}
            <div className="flex gap-3">
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank">
                  <Button size="lg" className="rounded-md">
                    <TechIcon name="github" className="w-4 h-4" />
                    View Code
                  </Button>
                </Link>
              )}
              {project.demoUrl && (
                <Link href={project.demoUrl} target="_blank">
                  <Button variant="outline" size="lg" className="rounded-md">
                    <TechIcon name="external-link" className="w-4 h-4" />
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className="relative overflow-hidden w-full md:w-1/3 h-70 group rounded-lg">
            {/* Image */}
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Animated Video Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.3,
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#ff9900",
                }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Pulsing Borders */}
                <motion.span
                  className="absolute inset-0 border-2 border-soft-white rounded-full"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{
                    scale: 1.5,
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <motion.span
                  className="absolute inset-0 border-2 border-white rounded-full"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{
                    scale: 1.8,
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                />

                {/* Play Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-11 w-11 text-white ml-1 z-20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Features */}
            <div className="bg-dark-blue rounded-lg shadow-sm p-4 sm:p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5">
                      <TechIcon name="check" className="w-5 h-5" />
                    </span>
                    <span className="text-soft-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div className="bg-dark-blue rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Implementation Steps
              </h2>
              <div className="space-y-6">
                {project.steps.map((step, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h3 className="text-lg font-medium text-white mb-2">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-border-blue mb-3">{step.description}</p>
                    {step.code && (
                      <pre className="bg-bg text-soft-white p-4 rounded-md overflow-x-auto text-sm">
                        <code>{step.code}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-dark-blue rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 bg-border-blue/40 text-soft-white rounded-md text-sm"
                  >
                    <TechIcon name={tech.icon} className="w-4 h-4" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-dark-blue rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Project Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-border-blue mb-1">
                    Category
                  </h3>
                  <p className="text-white">{project.category}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-border-blue mb-1">
                    Type
                  </h3>
                  <p className="text-white">{project.type}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-border-blue mb-1">
                    Difficulty
                  </h3>
                  <p className="text-white">{project.difficulty}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-border-blue mb-1">
                    Time Estimate
                  </h3>
                  <p className="text-white">{project.estimatedTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
