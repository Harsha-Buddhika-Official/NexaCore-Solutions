import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Container from "../common/Container";

const ChallengeSolutionSection = ({ project }) => {
  const { problem, solution } = project;

  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="p-6 border rounded-2xl border-slate-700/60 bg-base-800/50 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 text-red-400 rounded-lg bg-red-500/10">
                <WarningAmberIcon fontSize="small" />
              </div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                The Challenge
              </h2>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
              {problem}
            </p>
          </div>

          <div className="p-6 border rounded-2xl border-slate-700/60 bg-base-800/50 sm:p-8">
            <div className="flex items-center gap-3">
              <div
                style={{
                  color: "var(--accent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--accent) 12%, transparent)",
                }}
                className="flex items-center justify-center w-10 h-10 rounded-lg"
              >
                <LightbulbIcon fontSize="small" />
              </div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                The Solution
              </h2>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
              {solution}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChallengeSolutionSection;