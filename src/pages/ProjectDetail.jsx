import { useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import ProjectDetailHero from "../components/project-detail/ProjectDetailHero";
import ChallengeSolutionSection from "../components/project-detail/ChallengeSolutionSection";
import TechStackPills from "../components/project-detail/TechStackPills";
import FeaturesGrid from "../components/project-detail/FeaturesGrid";
import MetricsSection from "../components/project-detail/MetricsSection";
import ProjectNotFound from "../components/project-detail/ProjectNotFound";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="relative" style={{ "--accent": project.accentColor }}>
      {/* Ambient theme-colored glow behind the hero, using the project's own accentColor */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--accent)_0%,_transparent_65%)] opacity-[0.08]" />

      <div className="relative">
        <ProjectDetailHero project={project} />
        <ChallengeSolutionSection project={project} />
        <TechStackPills project={project} />
        <FeaturesGrid project={project} />
        <MetricsSection project={project} />
      </div>
    </div>
  );
};

export default ProjectDetail;