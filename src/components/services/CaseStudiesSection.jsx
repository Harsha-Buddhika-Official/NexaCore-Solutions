import Container from "../common/Container";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "../../data/servicesPageData";

const CaseStudiesSection = () => {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <span className="font-mono text-xs font-semibold tracking-wider text-slate-500">
          RECENT CASE STUDIES
        </span>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudiesSection;