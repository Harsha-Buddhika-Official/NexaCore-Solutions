import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navLinks } from "../../data/navLinks";
import Button from "../common/Button";
import Container from "../common/Container";
import logo from "../../assets/logos/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base-900/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between sm:h-20">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="NexaCore Solutions" className="h-8 w-8" />
            <span className="text-lg font-bold text-white">
              NexaCore Solutions
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-indigo-400"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-indigo-400 transition-all duration-200 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="/contact"
              className="group relative text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-indigo-400"
            >
              Contact
              <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-indigo-400 transition-all duration-200 ease-out group-hover:w-full" />
            </a>
            <Button as="a" href="/start-project">
              Start Project
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-slate-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <CloseIcon fontSize="medium" />
            ) : (
              <MenuIcon fontSize="medium" />
            )}
          </button>
        </nav>

        {isOpen && (
          <div className="flex flex-col gap-4 border-t border-white/5 py-6 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-indigo-400"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-indigo-400"
            >
              Contact
            </a>
            <Button as="a" href="/start-project" className="w-full">
              Start Project
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;