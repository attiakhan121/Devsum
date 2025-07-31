import { useState } from "react";
import TechIcon from "../../components/TechIcon";

const Tabs = ({ course }) => {
  const [activeTab, setActiveTab] = useState("tabOne");
  const [expandedSections, setExpandedSections] = useState({
    fundamentals: true,
    advanced: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const tabs = [
    {
      id: "tabOne",
      title: "Course Info",
    },
    {
      id: "tabTwo",
      title: "Curriculum",
    },
    {
      id: "tabThree",
      title: "Reviews",
    },
  ];

  // Calculate total lectures and duration for curriculum header
  const totalLectures =
    course.curriculum.fundamentals.lectures +
    course.curriculum.advanced.lectures;
  const totalDuration = `${course.curriculum.fundamentals.duration} + ${course.curriculum.advanced.duration}`;

  return (
    <section>
      {/* Tab header */}
      <div className="flex flex-wrap items-center bg-dark-blue rounded-md shadow-md gap-8 sm:gap-12 px-4 py-4 sm:px-7">
        {tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`font-medium text-custom-xl ease-out duration-300 hover:text-accent relative before:h-0.5 before:bg-accent before:absolute before:left-0 before:bottom-0 before:ease-out before:duration-200 hover:before:w-full ${
              activeTab === item.id
                ? "text-accent before:w-full"
                : "text-white before:w-0"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Tab Course Info */}
      <div
        className={`gap-12 mt-10 sm:mt-12 rounded-xl bg-dark-blue shadow-md p-4 sm:p-6 ${
          activeTab === "tabOne" ? "block" : "hidden"
        }`}
      >
        <div>
          <h2 className="font-semibold text-white text-2xl mb-4">
            About this course
          </h2>
          <p className="mb-6 text-soft-white">{course.abouts.about1}</p>
          <p className="text-soft-white">{course.abouts.about2}</p>
        </div>

        <div className="my-5">
          <h2 className="font-semibold text-white text-2xl mb-4">
            What you'll learn
          </h2>
          <ul className="list-disc pl-6 mt-5 text-soft-white">
            {course.whatYouLearn.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white text-2xl">Requirements</h2>
          <ul className="list-disc pl-6 mt-5 text-soft-white">
            {course.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-md bg-bg py-5 px-3 sm:py-6 sm:px-4 my-7">
          <p className="italic text-border-blue text-center">
            {`"${course.instructor.bio}"`}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="overflow-hidden">
              {course.instructor.image ? (
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full overflow-hidden"
                  width={50}
                  height={50}
                />
              ) : (
                <TechIcon
                  name="user"
                  className="w-15 h-15 p-4 bg-border-blue/50 rounded-full"
                />
              )}
            </div>
            <div>
              <h4 className="text-secondary text-soft-white text-custom-sm">
                {course.instructor.name}
              </h4>
              <p className="text-custom-sm text-border-blue">
                {course.instructor.role}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-white text-2xl mb-4">
            What is the target audience?
          </h2>
          <p className="mb-6 text-soft-white">{course.targetAudience}</p>
        </div>
      </div>

      {/* Tab Curriculum */}
      <div
        className={`rounded-xl shadow-md overflow-hidden mt-10 sm:mt-12 ${
          activeTab === "tabTwo" ? "block" : "hidden"
        }`}
      >
        <div className="bg-dark-blue px-5 sm:px-7 py-4 sm:py-5 shadow-md">
          <h2 className="text-2xl font-semibold text-white">
            {course.title} Curriculum
          </h2>
          <div className="flex items-center space-x-4 mt-4 text-md text-border-blue">
            <span className="flex items-center">
              <TechIcon name="book-open" className="w-5 h-5 mr-2" />
              {totalLectures} Lectures
            </span>
            <span className="flex items-center">
              <TechIcon name="clock" className="w-5 h-5 mr-2" />
              {totalDuration}
            </span>
          </div>
        </div>

        {/* Fundamentals Section */}

        <div className="p-1 sm:p-2 bg-dark-blue my-6 rounded-xl shadow-md">
          <div
            className="flex justify-between items-center p-3 sm:p-5 cursor-pointer"
            onClick={() => toggleSection("fundamentals")}
          >
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-white">
                Section 1: {course.curriculum.fundamentals.title}
              </h3>
              <span className="mx-2 px-2.5 py-1 bg-accent/70 text-white text-xs rounded-full whitespace-nowrap">
                {course.curriculum.fundamentals.topics.length} modules
              </span>
            </div>
            {expandedSections.fundamentals ? (
              <TechIcon
                name="chevron-up"
                className="w-5 h-5 text-border-blue shrink-0"
              />
            ) : (
              <TechIcon
                name="chevron-down"
                className="w-5 h-5 text-border-blue shrink-0"
              />
            )}
          </div>

          {expandedSections.fundamentals && (
            <div className="px-0 sm:px-5 pb-5">
              <ul className="space-y-3">
                {course.curriculum.fundamentals.topics.map((topic) => (
                  <li
                    key={topic.id}
                    className="flex justify-between items-center gap-2 p-3 hover:bg-bg rounded-lg"
                  >
                    <div className="flex items-center">
                      {topic.locked ? (
                        <TechIcon
                          name="lock"
                          className="w-5 h-5 text-gray-400 mr-3"
                        />
                      ) : (
                        <TechIcon
                          name="check-circle"
                          className="w-5 h-5 text-green-500 mr-3"
                        />
                      )}
                      <span className="text-soft-white">{topic.title}</span>
                    </div>
                    <span className="text-sm text-soft-white whitespace-nowrap">
                      {topic.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Advanced Section */}
        <div className="p-1 sm:p-2 bg-dark-blue rounded-xl shadow-md">
          <div
            className="flex justify-between items-center p-4 sm:p-5 cursor-pointer"
            onClick={() => toggleSection("advanced")}
          >
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-white">
                Section 2: {course.curriculum.advanced.title}
              </h3>
              <span className="mx-2 px-2.5 py-1 bg-accent/70 text-white text-xs rounded-full whitespace-nowrap">
                {course.curriculum.advanced.topics.length} modules
              </span>
            </div>
            {expandedSections.advanced ? (
              <TechIcon
                name="chevron-up"
                className="w-5 h-5 text-border-blue shrink-0"
              />
            ) : (
              <TechIcon
                name="chevron-down"
                className="w-5 h-5 text-border-blue shrink-0"
              />
            )}
          </div>

          {expandedSections.advanced && (
            <div className="px-0 sm:px-5 pb-5">
              <ul className="space-y-3">
                {course.curriculum.advanced.topics.map((topic) => (
                  <li
                    key={topic.id}
                    className="flex justify-between items-center gap-2 p-3 hover:bg-bg rounded-lg"
                  >
                    <div className="flex items-center">
                      {topic.locked ? (
                        <TechIcon
                          name="lock"
                          className="w-5 h-5 text-gray-400 mr-3"
                        />
                      ) : (
                        <TechIcon
                          name="check-circle"
                          className="w-5 h-5 text-green-500 mr-3"
                        />
                      )}
                      <span className="text-soft-white">{topic.title}</span>
                    </div>
                    <span className="text-sm text-border-blue whitespace-nowrap">
                      {topic.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Tab Reviews */}
      <div
        className={`gap-12 mt-10 sm:mt-12 ${
          activeTab === "tabThree" ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-5 ">
          {course.reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-xl bg-dark-blue shadow-md p-4 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="overflow-hidden">
                    {review.image ? (
                      <img
                        src={review.image}
                        alt={review.user}
                        className="w-12 h-12 rounded-full overflow-hidden"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <TechIcon
                        name="user"
                        className="w-15 h-15 p-4 bg-border-blue/50 rounded-full"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-soft-white text-secondary">
                      {review.user}
                    </h3>
                    <p className="text-custom-sm text-border-blue">
                      {review.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="cursor-pointer text-[#FBB040]">
                      <TechIcon
                        name="star"
                        className={`w-4 h-4 ${
                          i < review.rating ? "fill-current" : ""
                        }`}
                      />
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-soft-white mt-6">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
