import { socialLinks } from "../../data/contactPageData";

const SocialLinksBar = () => {
  return (
    <div className="p-6 border rounded-2xl border-slate-700/60 bg-base-800/50">
      <div className="grid grid-cols-3 gap-4">
        {socialLinks.map((social) => {
          const { id, icon: Icon, label, href } = social;
          return (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-colors duration-200 group text-slate-400 hover:text-indigo-300"
            >
              <Icon fontSize="small" />
              <span className="text-sm">{label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinksBar;