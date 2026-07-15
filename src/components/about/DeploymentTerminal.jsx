const DeploymentTerminal = ({ terminal }) => {
  const { filename, lines } = terminal;

  return (
    <div className="overflow-hidden border shadow-2xl rounded-2xl border-slate-700/60 bg-base-800">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-base-700/50">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-auto font-mono text-xs text-slate-500">
          {filename}
        </span>
      </div>

      <pre className="p-5 overflow-x-auto font-mono text-xs leading-relaxed sm:text-sm">
        <code>
          {lines.map((line, lineIndex) => (
            <span key={lineIndex}>
              {line.map((token, tokenIndex) => (
                <span key={tokenIndex} className={token.className}>
                  {token.text}
                </span>
              ))}
              {lineIndex < lines.length - 1 && "\n"}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default DeploymentTerminal;