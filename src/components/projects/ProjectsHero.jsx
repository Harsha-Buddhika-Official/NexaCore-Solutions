import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Container from "../common/Container";

const ProjectsHero = () => {
  return (
    <section className="pb-10 pt-14 sm:pb-14 sm:pt-20">
      <Container>
        <span className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs font-semibold tracking-wide border rounded-full border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
          <RocketLaunchIcon sx={{ fontSize: 14 }} />
          PORTFOLIO
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Engineering the{" "}
          <span className="text-indigo-400">Next Wave</span> of Digital
          Excellence.
        </h1>

        <p className="max-w-2xl mt-6 text-base text-slate-400 sm:text-lg">
          Explore our catalog of high-performance solutions, from complex
          cloud infrastructures to intuitive mobile experiences.
        </p>
      </Container>
    </section>
  );
};

export default ProjectsHero;