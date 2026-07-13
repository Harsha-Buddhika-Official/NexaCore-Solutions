import { useEffect, useState } from "react";

const codeLines = [
  [
    { text: "resource", className: "text-purple-400" },
    { text: " " },
    { text: '"aws_eks_cluster"', className: "text-emerald-400" },
    { text: " " },
    { text: '"prod"', className: "text-emerald-400" },
    { text: " {" },
  ],
  [
    { text: "  " },
    { text: "name", className: "text-sky-400" },
    { text: " = " },
    { text: '"nexacore-core-01"', className: "text-emerald-400" },
  ],
  [
    { text: "  " },
    { text: "version", className: "text-sky-400" },
    { text: " = " },
    { text: '"1.27"', className: "text-emerald-400" },
  ],
  [
    { text: "  " },
    { text: "scaling_config", className: "text-sky-400" },
    { text: " {" },
  ],
  [
    { text: "    " },
    { text: "desired_size", className: "text-sky-400" },
    { text: " = " },
    { text: "5", className: "text-orange-400" },
  ],
  [
    { text: "    " },
    { text: "max_size", className: "text-sky-400" },
    { text: " = " },
    { text: "50", className: "text-orange-400" },
  ],
  [{ text: "  }" }],
  [{ text: "}" }],
];

const flatChars = codeLines.flatMap((line, lineIndex) => [
  ...line.flatMap((token) =>
    Array.from(token.text).map((char) => ({ char, className: token.className }))
  ),
  ...(lineIndex < codeLines.length - 1 ? [{ char: "\n", className: undefined }] : []),
]);

const TYPE_SPEED_MS = 22;
const PAUSE_BEFORE_RESTART_MS = 2200;

const TerminalCode = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

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
        setVisibleCount(0);
        setIsTyping(true);
      }, 400);
    }

    return () => clearTimeout(timeoutId);
  }, [visibleCount, isTyping]);

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