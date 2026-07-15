import Container from "../common/Container";
import { getTechIcon } from "../../utils/techIcons";

const TechStackPills = ({ project }) => {
  const { tags } = project;

  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <p
          style={{ color: "var(--accent)" }}
          className="font-mono text-xs font-semibold tracking-widest text-center"
        >
          ENGINEERED WITH
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {tags.map((tag) => {
            const Icon = getTechIcon(tag);
            return (
              <span
                key={tag}
                className="flex items-center gap-2 px-4 py-2 font-mono text-xs border rounded-full border-slate-700 bg-base-800/60 text-slate-300"
              >
                <Icon sx={{ fontSize: 15 }} className="text-slate-400" />
                {tag}
              </span>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default TechStackPills;