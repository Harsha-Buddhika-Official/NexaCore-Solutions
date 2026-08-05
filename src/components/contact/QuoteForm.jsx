import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { projectTypes } from "../../data/contactPageData";

const initialFormState = {
  name: "",
  email: "",
  projectType: projectTypes[0],
  message: "",
};

const QuoteForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    alert("Use Email or WhatsApp to contact us for now.");
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData(initialFormState);
    }, 1200);
  };

  return (
    <div className="p-6 border rounded-2xl border-slate-700/60 bg-base-800/50 sm:p-8">
      <div className="flex items-center gap-2">
        <FiberManualRecordIcon
          sx={{ fontSize: 10 }}
          className="animate-pulse text-emerald-400"
        />
        <span className="font-mono text-xs font-semibold text-emerald-400">
          Quick Response Engine Active
        </span>
      </div>

      <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
        Get a Quote in 24 Hours
      </h2>
      <p className="mt-2 text-sm text-slate-400 sm:text-base">
        Fill out the brief below and our architects will review your
        requirements.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange("name")}
              placeholder="John Doe"
              className="w-full px-4 py-3 mt-2 text-sm text-white border rounded-lg border-slate-700 bg-base-900 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500"
            >
              Business Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange("email")}
              placeholder="j.doe@company.tech"
              className="w-full px-4 py-3 mt-2 text-sm text-white border rounded-lg border-slate-700 bg-base-900 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="projectType"
            className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500"
          >
            Project Type
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={handleChange("projectType")}
            className="w-full px-4 py-3 mt-2 text-sm text-white border rounded-lg appearance-none border-slate-700 bg-base-900 focus:border-indigo-500 focus:outline-none"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500"
          >
            Technical Brief / Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange("message")}
            placeholder="Describe your project goals, technology stack, and timeline..."
            className="w-full px-4 py-3 mt-2 text-sm text-white border rounded-lg resize-none border-slate-700 bg-base-900 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 font-mono text-sm font-semibold text-white shadow-glow transition-colors duration-200 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Deploying..." : "Deploy Request"}
            <SendIcon sx={{ fontSize: 16 }} />
          </button>

          <p className="text-xs text-slate-500">
            * Data encrypted using AES-256 standards.
          </p>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;