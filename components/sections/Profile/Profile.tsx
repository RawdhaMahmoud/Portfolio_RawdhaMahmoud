"use client"
import { useState } from "react";
import EducationTimeline from "./EducationTimeline";
import Certifications from "./Certifications";
import Skills from "./Skills";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Éducation" },
    { id: "certifications", label: "Certifications" },
    { id: "competences", label: "Compétences" },
  ];

  return (
    <section id="profile" className="flex flex-col justify-center items-center mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#2d2d2d]">
      {/* Navigation Tabs */}
      <nav className="flex flex-col lg:flex-row gap-3 lg:gap-8 border-b lg:justify-around text-base sm:text-lg lg:text-xl w-full max-w-2xl rounded-2xl border-2 mb-8 lg:mb-12 border-[#2d2d2d] px-4 sm:px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 capitalize font-medium transition-all duration-300
              ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-white"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === "education" && (
          <EducationTimeline/>
        )}

        {activeTab === "certifications" && (
          <Certifications />
        )}

        {activeTab === "competences" && (
          <Skills/>
        )}
      </div>

    </section>
  );
}
