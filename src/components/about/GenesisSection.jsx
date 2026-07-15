import Container from "../common/Container";
import { genesis } from "../../data/aboutPageData";

const GenesisSection = () => {
  const { title, paragraphs, image } = genesis;

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {title}
            </h2>
            <div className="flex flex-col gap-4 mt-5">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-slate-400 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border rounded-2xl border-slate-700/60 bg-base-800">
            <img
              src={image}
              alt="Engineering hardware close-up"
              className="object-cover w-full h-72 sm:h-96"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GenesisSection;