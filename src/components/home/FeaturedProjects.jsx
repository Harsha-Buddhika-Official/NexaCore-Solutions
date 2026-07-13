import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const FeaturedProjects = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading title="Featured Projects" align="left" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;