import { useMemo, useState } from "react";
import Container from "../common/Container";
import FilterPills from "./FilterPills";
import ProjectCardDetailed from "./ProjectCardDetailed";
import ProjectCardSimple from "./ProjectCardSimple";
import { filterOptions, projects } from "../../data/projectsPageData";

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

        <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2">
          {filteredProjects.map((project) =>
            project.variant === "detailed" ? (
              <ProjectCardDetailed key={project.id} project={project} />
            ) : (
              <ProjectCardSimple key={project.id} project={project} />
            )
          )}
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