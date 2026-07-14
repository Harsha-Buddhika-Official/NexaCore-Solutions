import MouseGlow from "../components/common/MouseGlow";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Projects = () => {
  return (
    <div className="relative">
      <MouseGlow />
      <div className="relative z-10">
        <ProjectsHero />
        <ProjectsGrid />
      </div>
    </div>
  );
};

export default Projects;