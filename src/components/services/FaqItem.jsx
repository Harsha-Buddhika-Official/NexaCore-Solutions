import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700/60 bg-base-800/50">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-white sm:text-base">
          {faq.question}
        </span>
        <ExpandMoreIcon
          fontSize="small"
          className={`shrink-0 text-slate-400 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;