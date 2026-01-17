"use client";

import React from "react";
import certificationsData from "@/data/Certifications";
import CertificationCard from "@/components/ui/CertificationCard";

export default function Certifications() {
  return (
    <section className="w-full py-24 ">
      {/* Title */}
      <h2 className="text-center  mb-16 text-4xl sm:text-5xl font-bold text-white">
        Certifications
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
}
