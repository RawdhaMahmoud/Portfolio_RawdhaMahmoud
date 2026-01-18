"use client";

import { useEffect, useState, useCallback } from "react";

interface CodePart {
  type: "keyword" | "variable" | "string" | "function" | "bracket" | "comment";
  content: string;
}

interface CodeLine {
  type: "comment" | "empty" | "code";
  content?: string;
  parts?: CodePart[];
}

const codeLines: CodeLine[] = [
  { type: "comment", content: "// Building something amazing..." },
  { type: "empty", content: "" },
  {
    type: "code",
    parts: [
      { type: "keyword", content: "const " },
      { type: "variable", content: "developer" },
      { type: "bracket", content: " = {" },
    ],
  },
  {
    type: "code",
    parts: [
      { type: "variable", content: "name" },
      { type: "bracket", content: ": " },
      { type: "string", content: '"Rawdha Mahmoud"' },
      { type: "bracket", content: "," },
    ],
  },
  {
    type: "code",
    parts: [
      { type: "variable", content: "skills" },
      { type: "bracket", content: ": [" },
      { type: "string", content: '"React"' },
      { type: "bracket", content: ", " },
      { type: "string", content: '"TypeScript"' },
      { type: "bracket", content: "]," },
    ],
  },
  {
    type: "code",
    parts: [
      { type: "variable", content: "passion" },
      { type: "bracket", content: ": " },
      { type: "string", content: '"Creating experiences"' },
      { type: "bracket", content: "," },
    ],
  },
  { type: "code", parts: [{ type: "bracket", content: "};" }] },
  { type: "empty", content: "" },
  {
    type: "code",
    parts: [
      { type: "keyword", content: "async function " },
      { type: "function", content: "connectWithMe" },
      { type: "bracket", content: "() {" },
    ],
  },
  {
    type: "code",
    parts: [
      { type: "keyword", content: "await " },
      { type: "function", content: "sendMessage" },
      { type: "bracket", content: "(contact);" },
    ],
  },
  {
    type: "code",
    parts: [
      { type: "keyword", content: "return " },
      { type: "string", content: '"Success! 🚀"' },
      { type: "bracket", content: ";" },
    ],
  },
  { type: "code", parts: [{ type: "bracket", content: "}" }] },
];

const CodeAnimations = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    if (visibleLines >= codeLines.length) {
      setIsAnimationComplete(true);
      return;
    }

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 180);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  const getPartColor = useCallback((type: string): string => {
    const colorMap: Record<string, string> = {
      keyword: "text-purple-400",
      variable: "text-sky-400",
      string: "text-emerald-400",
      function: "text-amber-400",
      bracket: "text-gray-400",
      comment: "text-gray-500",
    };
    return colorMap[type] || "text-gray-400";
  }, []);

  const getIndentation = (index: number): string => {
    // Lines 3-6 (inside developer object) and 9-10 (inside function) need indentation
    if ((index >= 3 && index <= 5) || (index >= 9 && index <= 10)) {
      return "pl-4";
    }
    return "";
  };

  const renderLine = useCallback(
    (line: CodeLine, index: number) => {
      if (line.type === "empty") {
        return <div key={index} className="h-5" aria-hidden="true" />;
      }

      if (line.type === "comment") {
        return (
          <div
            key={index}
            className="flex items-center gap-3 animate-fadeIn"
            role="presentation"
          >
            <span className="text-gray-600 w-5 text-right select-none text-xs shrink-0">
              {index + 1}
            </span>
            <span className="text-gray-500 italic">{line.content}</span>
          </div>
        );
      }

      return (
        <div
          key={index}
          className={`flex items-center gap-3 animate-fadeIn ${getIndentation(
            index
          )}`}
          role="presentation"
        >
          <span className="text-gray-600 w-5 text-right select-none text-xs shrink-0">
            {index + 1}
          </span>
          <span className="whitespace-pre">
            {line.parts?.map((part, partIndex) => (
              <span key={partIndex} className={getPartColor(part.type)}>
                {part.content}
              </span>
            ))}
          </span>
        </div>
      );
    },
    [getPartColor]
  );

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute -inset-1 rounded-3xl blur-xl" />
        <div className="h-auto rounded-xl flex flex-col justify-start overflow-hidden bg-zinc-900 border border-white/10">
         
          <div className="flex items-center gap-2 px-6 py-4 bg-[#171717] border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="ml-3 text-sm text-gray-500 font-mono">
              developer.ts
            </span>
          </div>

          {/* Code Content Area */}
          <div className="px-6 py-5 space-y-1.5 font-mono text-sm sm:text-base leading-6">
            {codeLines
              .slice(0, visibleLines)
              .map((line, index) => renderLine(line, index))}

            {/* Animated Cursor */}
            {!isAnimationComplete && (
              <div className="flex items-center gap-3">
                <span className="text-gray-600 w-5 text-right select-none text-xs shrink-0">
                  {visibleLines + 1}
                </span>
                <span
                  className="w-1.5 h-4 bg-purple-400 rounded-sm animate-pulse"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        </div>
     
    </div>
  );
};

export default CodeAnimations;
