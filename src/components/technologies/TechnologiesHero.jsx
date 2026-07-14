import Container from "../common/Container";
import Badge from "../common/Badge";
import { heroContent } from "../../data/technologiesPageData";

const TechnologiesHero = () => {
  const { badge, titleLine1, titleHighlight1, titleLine2, description } =
    heroContent;

  return (
    <section className="pb-14 pt-14 sm:pb-20 sm:pt-20">
      <Container>
        <Badge className="border-cyan-400/20 bg-cyan-500/10 text-cyan-400">
          {badge}
        </Badge>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {titleLine1}
          <span className="text-cyan-400">{titleHighlight1}</span>
          <br />
          <span className="text-cyan-400">{titleLine2}</span>
        </h1>

        <p className="max-w-2xl mt-6 text-base text-slate-400 sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
};

export default TechnologiesHero;