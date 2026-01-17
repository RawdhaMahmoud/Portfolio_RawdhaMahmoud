"use client";
import Image from "next/image";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageurl: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  description,
  imageurl,
}: CertificationProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/30 bg-zinc-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-white/20">
      {/* Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-800">
        <Image
          src={imageurl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-1">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mb-2">
          {issuer} • {date}
        </p>

        <div className="w-12 h-0.5 bg-white mb-4" />

        <p className="text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
    </div>
  );
}
