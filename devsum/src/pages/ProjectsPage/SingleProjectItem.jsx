import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TechIcon from "../../components/TechIcon";
import Button from "../../components/Button";

const SingleProjectItem = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ y: -9 }}
      className="bg-dark-blue rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-lg p-5 group sm:p-7"
    >
      {/* Project Thumbnail */}
      <div className="relative h-60 overflow-hidden rounded-lg">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Difficulty Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.difficulty === "Beginner"
                ? "bg-green-900 text-green-100"
                : project.difficulty === "Intermediate"
                ? "bg-yellow-900 text-yellow-100"
                : "bg-red-900 text-red-100"
            }`}
          >
            {project.difficulty}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="mt-6">
        <Link to={`/projects/${project.id}`}>
          <h3 className="font-semibold text-xl my-4 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </Link>

        <p className="text-soft-white text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        <h3 className="text-md text-accent font-semibold">
          Technologies Used:
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 my-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-1 px-2 py-1 bg-border-blue/40 rounded-md text-xs"
            >
              <TechIcon name={tech.icon} className="w-3 h-3" />
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs text-border-blue self-center">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* View Details & Live Demo Buttons */}

        <div className="flex gap-3">
          <Link to={`/projects/${project.id}`}>
            <Button size="lg" className="rounded-md cursor-pointer">
              <TechIcon name="github" className="w-4 h-4" />
              View Detail
            </Button>
          </Link>

          <Link to="/">
            <Button
              variant="ghost"
              size="lg"
              className="rounded-md bg-transparent border border-accent cursor-pointer"
            >
              <TechIcon name="external-link" className="w-4 h-4" />
              Live Demo
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProjectItem;
