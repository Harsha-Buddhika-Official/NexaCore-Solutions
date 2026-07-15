import Container from "../common/Container";
import { missionVision } from "../../data/aboutPageData";

const MissionVisionSection = () => {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {missionVision.map((item) => {
            const { id, icon: Icon, iconColor, title, description, mono } = item;

            return (
              <div
                key={id}
                className="rounded-2xl border border-slate-700/60 bg-base-800/50 p-8 text-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#00F3FF]/40 hover:shadow-[0_0_30px_-10px_#00F3FF] sm:text-left"
              >
                <Icon
                  className={`mx-auto ${iconColor} sm:mx-0`}
                  sx={{ fontSize: 32 }}
                />
                <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed text-slate-400 ${
                    mono ? "font-mono" : ""
                  }`}
                >
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default MissionVisionSection;