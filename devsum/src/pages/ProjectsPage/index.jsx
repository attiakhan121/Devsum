import { useState } from "react";
import SingleProjectItem from "./SingleProjectItem";
import { projectsData } from "./projectData";
import Breadcrumb from "../../components/BreadCrumb";
import NewsLetter from "../../components/NewsLetter";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const categories = [
    "All",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  return (
    <>
      <Breadcrumb
        pageName="Projects"
        url="/"
        description="Explore real-world projects built to strengthen your skills and showcase your expertise."
      />
      <main className="mt-6 lg:mt-0">
        <div className="container">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-accent text-white"
                    : "bg-border-blue/60 text-soft-white hover:bg-border-blue/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <SingleProjectItem key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-border-blue">
                No projects found in this category
              </p>
            </div>
          )}
        </div>

        <NewsLetter />
      </main>
    </>
  );
};

export default ProjectsPage;
