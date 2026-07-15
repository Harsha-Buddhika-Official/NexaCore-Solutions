import { Link } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";

const ProjectNotFound = () => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <Container className="text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Project Not Found
        </h1>
        <p className="mt-4 text-sm text-slate-400 sm:text-base">
          The case study you're looking for doesn't exist or may have been
          moved.
        </p>
        <Link to="/projects" className="inline-block mt-8">
          <Button>Back to Projects</Button>
        </Link>
      </Container>
    </section>
  );
};

export default ProjectNotFound;