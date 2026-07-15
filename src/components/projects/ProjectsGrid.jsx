import { useMemo, useState } from "react";
import Container from "../common/Container";
import FilterPills from "./FilterPills";
import ProjectCard from "./ProjectCard";
import { filterOptions, projects } from "../../data/projects";

const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <FilterPills
          options={filterOptions}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-10 text-sm text-center text-slate-500">
            No projects found in this category yet.
          </p>
        )}
      </Container>
    </section>
  );
};

export default ProjectsGrid;