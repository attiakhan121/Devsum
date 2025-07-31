import { motion } from "framer-motion";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import TechIcon from "../../components/TechIcon";

const SingleListItem = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ y: -9 }}
      className="rounded-lg overflow-hidden shadow-lg bg-dark-blue transition-all duration-300 group p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center gap-6"
    >
      {/* Course Image - List View */}
      <div className="relative h-60 w-full md:w-1/3 rounded-lg overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="w-full flex-1 mt-0">
        <div className="flex items-center justify-between">
          <span className="bg-accent/70 rounded text-xs py-[4px] px-2">
            {course.category}
          </span>
          <div className="flex items-center gap-1 text-border-blue">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="cursor-pointer text-[#FBB040]">
                <TechIcon
                  name="star"
                  className={`w-4 h-4 ${
                    i < course.rating ? "fill-current" : ""
                  }`}
                />
              </span>
            ))}
            {`(${Number(course.rating).toFixed(1)})`}
          </div>
        </div>

        <Link to={`/courses/${course.id}`}>
          <h3 className="font-semibold text-xl my-4 hover:text-accent transition-colors cursor-pointer">
            {course.title}
          </h3>
        </Link>

        <div className="flex flex-wrap gap-3 text-md text-border-blue mb-6">
          <div className="flex items-center gap-1.5">
            <TechIcon name="clock" className="w-5 h-5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TechIcon name="book-open" className="w-5 h-5" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TechIcon name="users" className="w-5 h-5" />
            <span>{course.students}+ students</span>
          </div>
        </div>

        <h3 className="text-md text-accent font-semibold">
          What you'll learn:
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 my-5">
          {course.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-1 px-2 py-1 bg-border-blue/40 rounded-md text-xs"
            >
              <TechIcon name={tech.icon} className="w-3 h-3" />
              {tech.name}
            </span>
          ))}
          {course.technologies.length > 4 && (
            <span className="text-xs text-border-blue self-center">
              +{course.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {course.modes.map((mode) => (
              <div key={mode.type} className="flex items-baseline gap-1">
                <span className="font-semibold text-2xl text-white">
                  {mode.currency}
                  {mode.price}
                </span>
                <span className="text-md text-border-blue">{mode.type}</span>
              </div>
            ))}
          </div>
          <Link to={`/courses/${course.id}`}>
            <Button
              size="lg"
              variant="outline"
              className="w-full md:w-auto rounded-md group transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Learn More About it
              <TechIcon
                name="arrow-right"
                className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleListItem;
