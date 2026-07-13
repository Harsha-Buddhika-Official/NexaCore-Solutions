import { useState } from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import TerminalIcon from "@mui/icons-material/Terminal";
import Button from "../common/Button";
import Badge from "../common/Badge";
import Container from "../common/Container";
import TerminalCode from "./TerminalCode";
import CrtOverlay from "./CrtOverlay";

const Hero = () => {
  const [filename, setFilename] = useState("main.tf");

  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_55%)]" />

      <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Badge>DIGITAL ENGINEERING EXCELLENCE</Badge>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building Modern{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>{" "}
            That Scale
          </h1>

          <p className="mt-6 max-w-xl text-base text-slate-400 sm:text-lg">
            NexaCore Solutions develops modern websites, mobile applications,
            and scalable software solutions using industry-leading
            technologies and developer-centric architecture.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button as="a" href="/start-project" size="lg">
              Start Your Project
            </Button>
            <Button as="a" href="/services" variant="secondary" size="lg">
              View Services
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-base-800 shadow-2xl">
            <div className="relative flex items-center gap-2 border-b border-slate-700/60 bg-base-700/50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-auto font-mono text-xs text-slate-500 transition-opacity duration-200">
                {filename}
              </span>
            </div>

            <TerminalCode onFilenameChange={setFilename} />

            <div className="relative flex gap-3 border-t border-slate-700/60 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-base-700 text-slate-300">
                <CloudIcon fontSize="small" />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <TerminalIcon fontSize="small" />
              </div>
            </div>

            <CrtOverlay />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;