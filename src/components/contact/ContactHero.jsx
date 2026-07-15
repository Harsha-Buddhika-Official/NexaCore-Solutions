import Container from "../common/Container";
import Badge from "../common/Badge";
import { heroContent } from "../../data/contactPageData";

const ContactHero = () => {
  const { badge, titleLine1, titleHighlight, titleLine2, description } =
    heroContent;

  return (
    <section className="pb-10 pt-14 sm:pb-14 sm:pt-20">
      <Container>
        <Badge className="border-slate-700 bg-base-800 text-slate-300">
          {badge}
        </Badge>

        <h1 className="max-w-3xl mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {titleLine1}
          <span className="text-indigo-300">{titleHighlight}</span>
          {titleLine2}
        </h1>

        <p className="max-w-2xl mt-6 text-base text-slate-400 sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
};

export default ContactHero;