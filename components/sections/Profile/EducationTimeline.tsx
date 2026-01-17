"use client";

import Education from "@/data/Education";

interface TimelineCardProps {
  school: string;
  degree: string;
  location: string;
  date: string;
  description: string;
}

function TimelineCard({
  school,
  degree,
  location,
  date,
  description,
}: TimelineCardProps) {
  const technologies = [
    "Academic Excellence",
    "Scientific Research",
    "Critical Thinking",
  ];

  return (
    <div className="group relative rounded-2xl border-2 border-white bg-zinc-900 p-6 sm:p-8 shadow-2xl shadow-black/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-white/20">
      {/* School Name */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
        {school}
      </h3>

      {/* Degree */}
      <p className="text-base sm:text-lg text-gray-200 font-semibold mb-1">
        {degree}
      </p>

      {/* Location & Date */}
      <p className="text-sm text-gray-400 mb-4">
        {location} • {date}
      </p>

      {/* Gold Divider */}
      <div className="w-16 h-0.5 bg-white mb-4" />

      {/* Description */}
      <div className="mb-6">
        <ul className="space-y-2">
          <li className="text-sm text-gray-300 flex items-start gap-2">
            <span className="text-blue-500 mt-0.5 shrink-0 font-bold">•</span>
            <span>{description}</span>
          </li>
        </ul>
      </div>

      {/* Technologies Section */}
      <div className="pt-4 border-t border-zinc-700/50">
        <p className="text-sm">
          <span className="text-blue-500 font-bold">Technologies: </span>
          <span className="text-gray-400">{technologies.join(", ")}</span>
        </p>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
    </div>
  );
}

export default function EducationTimeline() {
  return (
    <section className="relative w-full min-h-screen  py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h2 className="mb-16 sm:mb-24 text-center lg:text-5xl     text-4xl sm:text-5xl font-bold text-white">
        Education
      </h2>

      <div className="relative mx-auto max-w-7xl">
        {/* Desktop: Centered Vertical Timeline */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white   hidden md:block" />

        {/* Mobile: Left-aligned Vertical Timeline */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-white md:hidden" />

        {/* Timeline Items */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {Education.map((item, index) => {
            const isLeft = index % 2 === 0;
            const year = item.date.split(" - ")[0] || item.date;

            return (
              <div key={index} className="relative flex justify-center">
                {/* DESKTOP LAYOUT: 3-Column Grid */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
                  {/* Left Column */}
                  <div className="flex justify-end">
                    {isLeft && <TimelineCard {...item} />}
                  </div>

                  {/* Center Column: Timeline Dot */}
                  <div className="flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-white border-4 border-black shadow-lg shadow-[#FACC15]/50 z-10" />
                  </div>

                  {/* Right Column */}
                  <div className="flex justify-start">
                    {!isLeft && <TimelineCard {...item} />}
                  </div>
                </div>

                {/* MOBILE LAYOUT: Timeline Left + Card Right */}
                <div className="flex md:hidden gap-6 items-center">
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center shrink-0 ml-5.5">
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-black shadow-lg shadow-[#FACC15]/50 z-10" />
                  </div>

                  {/* Card */}
                  <div className="flex-1">
                    <TimelineCard {...item} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
