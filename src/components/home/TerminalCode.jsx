import { useEffect, useState } from "react";

const snippets = [
  {
    filename: "business.config",
    lines: [
      [
        { text: "business", className: "text-purple-400" },
        { text: " " },
        { text: '"your_business"', className: "text-emerald-400" },
        { text: " {" },
      ],
      [
        { text: "  " },
        { text: "website", className: "text-sky-400" },
        { text: " = " },
        { text: '"Professional & Modern"', className: "text-emerald-400" },
      ],
      [
        { text: "  " },
        { text: "brand_identity", className: "text-sky-400" },
        { text: " = " },
        { text: '"Strong Digital Presence"', className: "text-emerald-400" },
      ],
      [
        { text: "  " },
        { text: "customer_experience", className: "text-sky-400" },
        { text: " = " },
        { text: '"Simple & Intuitive"', className: "text-emerald-400" },
      ],
      [
        { text: "  " },
        { text: "business_growth", className: "text-sky-400" },
        { text: " = " },
        { text: '"Always Scaling"', className: "text-emerald-400" },
      ],
      [
        { text: "  " },
        { text: "status", className: "text-sky-400" },
        { text: " = " },
        { text: '"Ready for Success"', className: "text-emerald-400" },
      ],
      [{ text: "}" }],
    ],
  },

  {
    filename: "solution.ts",
    lines: [
      [
        { text: "solution", className: "text-purple-400" },
        { text: " " },
        { text: '"nexacore"', className: "text-emerald-400" },
        { text: " {" },
      ],
      [
        { text: "  " },
        { text: "design", className: "text-sky-400" },
        { text: " = " },
        { text: '"Modern UI / UX"', className: "text-emerald-400" },
      ],
      [
        { text: "  " },
        { text: "performance", className: "text-sky-400" },
        { text: " = " },
        { text: '"Optimized for Speed"', className: "text-emerald-400" },
      ],
      [
        { text: "  " },
        { text: "security", className: "text-sky-400" },
        { text: " = " },
        { text: '"Enterprise Protection"', className: "text-emerald-400" },
      ],
      [
        { text: "  " },
        { text: "technology", className: "text-sky-400" },
        { text: " = " },
        { text: '"Built for the Future"', className: "text-emerald-400" },
      ],
      [
        { text: "  " },
        { text: "result", className: "text-sky-400" },
        { text: " = " },
        { text: '"Helping Businesses Grow"', className: "text-emerald-400" },
      ],
      [{ text: "}" }],
    ],
  },

  {
    filename: "security.yaml",
    lines: [
      [
        { text: "business_security", className: "text-purple-400" },
        { text: ":" },
      ],
      [
        { text: "  " },
        { text: "data_protection", className: "text-sky-400" },
        { text: ": " },
        { text: "enabled", className: "text-emerald-400" },
      ],
      [
        { text: "  " },
        { text: "secure_authentication", className: "text-sky-400" },
        { text: ": " },
        { text: "active", className: "text-emerald-400" },
      ],
      [
        { text: "  " },
        { text: "system_reliability", className: "text-sky-400" },
        { text: ": " },
        { text: "99.9%", className: "text-orange-400" },
      ],
      [
        { text: "  " },
        { text: "future_updates", className: "text-sky-400" },
        { text: ": " },
        { text: "supported", className: "text-emerald-400" },
      ],
      [
        { text: "  " },
        { text: "deployment_status", className: "text-sky-400" },
        { text: ": " },
        { text: "production_ready", className: "text-emerald-400" },
      ],
    ],
  },

  {
    filename: "deploy.sh",
    lines: [
      [
        { text: "$ ", className: "text-slate-500" },
        { text: "initialize_project", className: "text-purple-400" },
      ],
      [{ text: "✓ Understanding your business goals", className: "text-emerald-400" }],
      [
        { text: "$ ", className: "text-slate-500" },
        { text: "build_solution", className: "text-purple-400" },
      ],
      [{ text: "✓ Modern, secure & scalable platform", className: "text-emerald-400" }],
      [
        { text: "$ ", className: "text-slate-500" },
        { text: "launch_business", className: "text-purple-400" },
      ],
      [{ text: "✓ Your digital success starts here 🚀", className: "text-emerald-400" }],
    ],
  },
];

const buildFlatChars = (lines) =>
  lines.flatMap((line, lineIndex) => [
    ...line.flatMap((token) =>
      Array.from(token.text).map((char) => ({ char, className: token.className }))
    ),
    ...(lineIndex < lines.length - 1 ? [{ char: "\n", className: undefined }] : []),
  ]);

const TYPE_SPEED_MS = 22;
const PAUSE_BEFORE_RESTART_MS = 2200;

const TerminalCode = ({ onFilenameChange }) => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const currentSnippet = snippets[snippetIndex];
  const flatChars = buildFlatChars(currentSnippet.lines);

  useEffect(() => {
    onFilenameChange?.(currentSnippet.filename);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snippetIndex]);

  useEffect(() => {
    let timeoutId;

    if (isTyping) {
      if (visibleCount < flatChars.length) {
        timeoutId = setTimeout(() => {
          setVisibleCount((count) => count + 1);
        }, TYPE_SPEED_MS);
      } else {
        timeoutId = setTimeout(() => setIsTyping(false), PAUSE_BEFORE_RESTART_MS);
      }
    } else {
      timeoutId = setTimeout(() => {
        setSnippetIndex((prev) => (prev + 1) % snippets.length);
        setVisibleCount(0);
        setIsTyping(true);
      }, 400);
    }

    return () => clearTimeout(timeoutId);
  }, [visibleCount, isTyping, flatChars.length]);

  const visibleChars = flatChars.slice(0, visibleCount);
  const runs = [];
  for (const { char, className } of visibleChars) {
    const last = runs[runs.length - 1];
    if (last && last.className === className) {
      last.text += char;
    } else {
      runs.push({ text: char, className });
    }
  }

  return (
    <pre className="relative overflow-x-auto p-5 font-mono text-xs leading-relaxed sm:text-sm">
      <code>
        {runs.map((run, i) => (
          <span key={i} className={run.className}>
            {run.text}
          </span>
        ))}
        <span
          className={`ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-cyan-400 ${
            isTyping ? "animate-pulse" : "opacity-0"
          }`}
        />
      </code>
    </pre>
  );
};

export default TerminalCode;