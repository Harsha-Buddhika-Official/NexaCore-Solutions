import { contactInfo, socialLinks } from "../../data/contactPageData";

const ContactSidebar = () => {
  return (
    <div className="flex flex-col gap-6 p-6 border rounded-2xl border-slate-700/60 bg-base-800/50 sm:p-8 lg:sticky lg:top-24">
      <div>
        <h3 className="text-lg font-bold text-white">Direct Contact</h3>
        <p className="mt-1 text-sm text-slate-400">
          Prefer to reach out directly? Use the channels below.
        </p>
      </div>

      <div className="flex flex-col gap-5 pt-6 border-t border-slate-700/60">
        {contactInfo.map((item) => {
          const { id, icon: Icon, label, value, href } = item;
          return (
            <a key={id} href={href} className="flex items-center gap-4 group">
              <div className="flex items-center justify-center transition-colors duration-200 rounded-lg h-11 w-11 shrink-0 bg-base-700 text-slate-300 group-hover:bg-indigo-500/10 group-hover:text-indigo-300">
                <Icon fontSize="small" />
              </div>
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className="mt-0.5 text-base font-bold text-white transition-colors duration-200 group-hover:text-indigo-300">
                  {value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="pt-6 border-t border-slate-700/60">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Follow Us
        </p>
        <div className="flex gap-3 mt-4">
          {socialLinks.map((social) => {
            const { id, icon: Icon, label, href } = social;
            return (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 transition-colors duration-200 border rounded-lg border-slate-700 text-slate-400 hover:border-indigo-400/50 hover:text-indigo-300"
              >
                <Icon fontSize="small" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-3 border rounded-lg border-emerald-500/20 bg-emerald-500/5">
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex w-full h-full rounded-full animate-ping bg-emerald-400 opacity-60" />
          <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
        </span>
        <p className="text-xs font-medium text-emerald-400">
          Avg. response time: 15 minutes
        </p>
      </div>
    </div>
  );
};

export default ContactSidebar;