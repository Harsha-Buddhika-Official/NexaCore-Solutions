import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Container from "../common/Container";
import { footerColumns } from "../../data/footerLinks";
import { contactInfo } from "../../data/contactPageData.js";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-base-950">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              {/* <div className="rounded-md h-7 w-7 bg-gradient-to-br from-indigo-500 to-purple-500" /> */}
              <img
                src="/src/assets/logos/logo.png"
                alt="NexaCore Solutions Logo"
                className="w-7 h-7"
              />
              <span className="text-base font-bold text-white">
                NexaCore Solutions
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Engineering high-performance digital products for the next
              generation of enterprises.
            </p>
            <div className="flex gap-3 mt-5">
              {contactInfo.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center transition-colors border rounded-lg h-9 w-9 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white"
                >
                  <Icon fontSize="small" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-500">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-sm transition-colors text-slate-400 hover:text-white"
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
            <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-500">
              Join Newsletter
            </h4>
            <p className="mt-4 text-sm text-slate-400">
              Stay updated with our latest tech insights.
            </p>
            <form
              className="flex gap-2 mt-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 text-sm text-white border rounded-lg border-slate-700 bg-base-800 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-500"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-12 text-xs border-t border-white/5 text-slate-500 sm:flex-row">
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
