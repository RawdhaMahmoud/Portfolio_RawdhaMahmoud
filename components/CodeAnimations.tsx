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
  { type: "code", parts: [
    { type: "keyword", content: "const" },
    { type: "variable", content: "developer" },
    { type: "bracket", content: "= {" },
  ]},
  { type: "code", parts: [
    { type: "variable", content: "name" },
    { type: "bracket", content: ":" },
    { type: "string", content: '"Rawdha Mahmoud"' },
    { type: "bracket", content: "," },
  ]},
  { type: "code", parts: [
    { type: "variable", content: "skills" },
    { type: "bracket", content: ": [" },
    { type: "string", content: '"React"' },
    { type: "bracket", content: "," },
    { type: "string", content: '"TypeScript"' },
    { type: "bracket", content: "]," },
  ]},
  { type: "code", parts: [
    { type: "variable", content: "passion" },
    { type: "bracket", content: ":" },
    { type: "string", content: '"Creating experiences"' },
    { type: "bracket", content: "," },
  ]},
  { type: "code", parts: [
    { type: "bracket", content: "};" },
  ]},
  { type: "empty", content: "" },
  { type: "code", parts: [
    { type: "keyword", content: "async function" },
    { type: "function", content: "connectWithMe" },
    { type: "bracket", content: "() {" },
  ]},
  { type: "code", parts: [
    { type: "keyword", content: "await" },
    { type: "function", content: "sendMessage" },
    { type: "bracket", content: "(contact);" },
  ]},
  { type: "code", parts: [
    { type: "keyword", content: "return" },
    { type: "string", content: '"Success! 🚀"' },
    { type: "bracket", content: ";" },
  ]},
  { type: "code", parts: [
    { type: "bracket", content: "}" },
  ]},
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

  const renderLine = useCallback((line: CodeLine, index: number) => {
    if (line.type === "empty") {
      return <div key={index} className="h-7" aria-hidden="true" />;
    }

    if (line.type === "comment") {
      return (
        <div 
          key={index} 
          className="flex items-start gap-4 animate-fadeIn"
          role="presentation"
        >
          <span className="text-gray-600 w-6 text-right select-none text-sm font-mono shrink-0 pt-0.5">
            {index + 1}
          </span>
          <span className="text-gray-500 italic text-base">{line.content}</span>
        </div>
      );
    }

    return (
      <div 
        key={index} 
        className={`flex items-start gap-4 animate-fadeIn ${getIndentation(index)}`}
        role="presentation"
      >
        <span className="text-gray-600 w-6 text-right select-none text-sm font-mono shrink-0 pt-0.5">
          {index + 1}
        </span>
        <span className="flex flex-wrap gap-x-1.5 text-base">
          {line.parts?.map((part, partIndex) => (
            <span 
              key={partIndex} 
              className={`${getPartColor(part.type)} transition-colors duration-200`}
            >
              {part.content}
            </span>
          ))}
        </span>
      </div>
    );
  }, [getPartColor]);

  return (
    <div className="w-full h-full">
      {/* macOS-style Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3.5 bg-black/30 border-b border-white/5 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-sm shadow-red-500/30" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-sm shadow-yellow-500/30" />
          <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-sm shadow-green-500/30" />
        </div>
        <span className="ml-4 text-sm text-gray-400 font-mono tracking-wide">
          developer.ts
        </span>
      </div>

      {/* Code Content Area */}
      <div className="p-6 sm:p-8 space-y-2 font-mono">
        {codeLines.slice(0, visibleLines).map((line, index) => renderLine(line, index))}
        
        {/* Animated Cursor */}
        {!isAnimationComplete && (
          <div className="flex items-center gap-3">
            <span className="text-gray-600 w-6 text-right select-none text-sm font-mono shrink-0">
              {visibleLines + 1}
            </span>
            <span 
              className="w-2.5 h-5 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-sm animate-pulse shadow-lg shadow-indigo-500/50" 
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeAnimations;