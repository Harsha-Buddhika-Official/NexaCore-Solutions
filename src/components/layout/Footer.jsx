import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Container from "../common/Container";
import { footerColumns } from "../../data/footerLinks";

const socialLinks = [
  { icon: EmailIcon, href: "mailto:hello@nexacore.dev", label: "Email" },
  { icon: GitHubIcon, href: "https://github.com", label: "GitHub" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-base-950">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500" />
              <span className="text-base font-bold text-white">
                NexaCore Solutions
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Engineering high-performance digital products for the next
              generation of enterprises.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-colors hover:border-slate-500 hover:text-white"
                >
                  <Icon fontSize="small" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Join Newsletter
            </h4>
            <p className="mt-4 text-sm text-slate-400">
              Stay updated with our latest tech insights.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-slate-700 bg-base-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} NexaCore Solutions. Engineered for
            Excellence.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-white">
              Cookie Policy
            </a>
            <a href="/security" className="hover:text-white">
              Security
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;