import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navLinks } from "../../data/navLinks";
import Button from "../common/Button";
import Container from "../common/Container";
import logo from "../../assets/logos/logo.png";

const desktopLinkClasses = ({ isActive }) =>
  `group relative text-sm font-medium transition-colors duration-200 ${
    isActive ? "text-[#00F1FD]" : "text-slate-300 hover:text-[#00F1FD]"
  }`;

const mobileLinkClasses = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? "text-[#00F1FD]" : "text-slate-300 hover:text-[#00F1FD]"
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base-900/80 backdrop-blur-md">
      <Container>
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="NexaCore Solutions" className="w-8 h-8" />
            <span className="text-lg font-bold text-white">
              NexaCore Solutions
            </span>
          </NavLink>

          <div className="items-center hidden gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} to={link.href} className={desktopLinkClasses}>
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 bg-[#00F1FD] transition-all duration-200 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="items-center hidden gap-6 lg:flex">
            <NavLink to="/contact" className={desktopLinkClasses}>
              {({ isActive }) => (
                <>
                  Contact
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 bg-[#00F1FD] transition-all duration-200 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
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
          <div className="flex flex-col gap-4 py-6 border-t border-white/5 lg:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={mobileLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className={mobileLinkClasses}>
              Contact
            </NavLink>
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