import { motion } from "framer-motion";
import Button from "../../components/Button";
import Tabs from "./Tab";
import { Link, useParams } from "react-router-dom";
import { coursesData } from "../CoursesPage/coursesData";
import Breadcrumb from "../../components/BreadCrumb";
import TechIcon from "../../components/TechIcon";

const CourseDetail = () => {
  const { id } = useParams();
  const courseId = parseInt(id);
  const course = coursesData.courses.find((p) => p.id === courseId);

  if (!course) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-dark-blue">Course not found</p>
      </div>
    );
  }

  const onlinePrice =
    course.modes.find((mode) => mode.type === "Online")?.price || 0;
  const onsitePrice =
    course.modes.find((mode) => mode.type === "Onsite")?.price || 0;

  return (
    <main>
      <Breadcrumb
        pageName="Courses"
        detailPage="Course Details"
        url="/"
        description="Understand the course content, goals, and what you'll learn."
      />
      <div className="container flex flex-col xl:flex-row gap-10 mt-6 lg:mt-0">
        {/* Course details */}
        <section className="xl:max-w-[950px] w-full">
          <div className="overflow-hidden h-70 sm:h-120 mb-7">
            <img
              className="rounded-lg sm:rounded-xl object-cover w-full h-full"
              src={course.image}
              alt={course.title}
            />
          </div>

          <Tabs course={course} />
        </section>

        {/* Course sidebar */}
        <aside className="xl:max-w-[450px] w-full">
          {/* Tags box */}
          <div className="shadow-md overflow-hidden rounded-xl">
            <div className="relative overflow-hidden h-70 mb-7 rounded-lg group">
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                src="https://validthemes.net/site-template/lerna/assets/img/courses/12.jpg"
                alt={course.title}
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

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-baseline gap-1">
                  <span className="font-semibold text-2xl text-white">
                    $ {onlinePrice}
                  </span>
                  <span className="text-md text-border-blue">Online</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-semibold text-2xl text-white">
                    $ {onsitePrice}
                  </span>
                  <span className="text-md text-border-blue">Onsite</span>
                </div>
              </div>

              <Link to="/login">
                <Button className="rounded-md cursor-pointer">
                  Enroll Now
                </Button>
              </Link>
            </div>

            <div className="bg-dark-blue p-4 sm:p-6 mt-5">
              {/* Guarantee Badge */}
              <div className="flex items-center justify-center py-2 px-4 rounded border border-border-blue mb-6">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="font-medium">{course.metadata.guarantee}</span>
              </div>

              {/* Course Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border-blue">
                  <div>
                    <TechIcon
                      name="book-open"
                      className="inline-block w-5 h-5 text-soft-white mr-3"
                    />
                    <p className="inline-block text-sm text-soft-white">
                      Lectures
                    </p>
                  </div>
                  <p className="font-medium text-border-blue">
                    {course.lessons}
                  </p>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-border-blue">
                  <div>
                    <TechIcon
                      name="globe"
                      className="inline-block w-5 h-5 text-soft-white mr-3"
                    />
                    <p className="inline-block text-sm text-soft-white">
                      Duration
                    </p>
                  </div>
                  <p className="font-medium text-border-blue">
                    {course.duration}
                  </p>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-border-blue">
                  <div>
                    <TechIcon
                      name="bar-chart-2"
                      className="inline-block w-5 h-5 text-soft-white mr-3"
                    />
                    <p className="inline-block text-sm text-soft-white">
                      Skill level
                    </p>
                  </div>
                  <p className="font-medium text-border-blue">{course.level}</p>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-border-blue">
                  <div>
                    <TechIcon
                      name="globe"
                      className="inline-block w-5 h-5 text-soft-white mr-3"
                    />
                    <p className="inline-block text-sm text-soft-white">
                      Language
                    </p>
                  </div>
                  <p className="font-medium text-border-blue">English</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <TechIcon
                      name="users"
                      className="inline-block w-5 h-5 text-soft-white mr-3"
                    />
                    <p className="inline-block text-sm text-soft-white">
                      Students
                    </p>
                  </div>
                  <p className="font-medium text-border-blue">
                    {course.students}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-dark-blue rounded-lg shadow-sm p-4 sm:p-6 mt-7">
            <h2 className="text-xl font-semibold text-white mb-4">
              What you'll learn:
            </h2>
            <div className="flex flex-wrap gap-2">
              {course.technologies.map((tech) => (
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

          <div className="bg-dark-blue rounded-xl shadow-sm p-4 sm:p-6 mt-7">
            <h3 className="text-xl font-semibold mb-6">Top Instructors</h3>

            <div className="space-y-6">
              {/* Top Instructors */}
              {coursesData.instructors.map((instructor, index) => (
                <div
                  key={index}
                  className="flex items-center sm:items-start flex-col sm:flex-row gap-5"
                >
                  <div className="relative">
                    <div className="overflow-hidden">
                      {instructor.image ? (
                        <img
                          src={instructor.image}
                          alt={instructor.image}
                          className="w-12 h-12 rounded-full overflow-hidden"
                          width={50}
                          height={50}
                        />
                      ) : (
                        <TechIcon
                          name="user"
                          className="w-16 h-16 p-4 bg-border-blue/70 rounded-full"
                        />
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                      <TechIcon
                        name="star"
                        className="w-3 h-3 mr-0.5 fill-yellow-500"
                      />
                      {Number(instructor.rating).toFixed(1)}
                    </div>
                  </div>
                  <div className="sm:text-start text-center flex-1">
                    <h4 className="font-semibold">{instructor.name}</h4>
                    <p className="text-soft-white text-sm mb-2">
                      {instructor.specialization}
                    </p>
                    <div className="flex gap-4 text-sm text-border-blue">
                      <span className="flex items-center sm:whitespace-nowrap">
                        <TechIcon name="book-open" className="w-4 h-4 mr-1" />
                        {instructor.courses} Courses
                      </span>
                      <span className="flex items-center sm:whitespace-nowrap">
                        <TechIcon name="users" className="w-4 h-4 mr-1" />
                        {instructor.students} Students
                      </span>
                    </div>
                  </div>
                  <button className="text-accent text-sm font-medium whitespace-nowrap cursor-pointer">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default CourseDetail;
