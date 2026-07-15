import { contactInfo } from "../../data/contactPageData";

const ContactInfoCard = () => {
  return (
    <div className="p-6 border rounded-2xl border-slate-700/60 bg-base-800/50 sm:p-8">
      <div className="flex flex-col gap-6">
        {contactInfo.map((item) => {
          const { id, icon: Icon, label, value, href } = item;
          return (
            <a
              key={id}
              href={href}
              className="flex items-center gap-4 group"
            >
              <div className="flex items-center justify-center transition-colors duration-200 rounded-lg h-11 w-11 shrink-0 bg-base-700 text-slate-300 group-hover:bg-indigo-500/10 group-hover:text-indigo-300">
                <Icon fontSize="small" />
              </div>
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className="mt-0.5 text-lg font-bold text-white transition-colors duration-200 group-hover:text-indigo-300">
                  {value}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfoCard;