"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-white">
      
      <h1 className="text-[10rem] sm:text-[12rem] font-extrabold bg-clip-text  text-white animate-fadeIn">
        404
      </h1>

      {/* Message */}
      <div className="text-center space-y-4 mt-4 sm:mt-8 max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-bold">Oups ! Page introuvable</h2>
        <p className="text-gray-300 text-lg sm:text-xl">
          La page que vous recherchez n’existe pas ou a été déplacée. Pas de panique, on vous ramène à l’accueil.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link
          href="/"
          className="group flex items-center gap-2 bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl  transition-all duration-300 transform hover:scale-105"
        >
          <Home className="w-5 h-5" />
          Accueil
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-800/70 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-700/50"
        >
          <ArrowLeft className="w-5 h-5" />
          Page précédente
        </button>
      </div>

      {/* Optional small footer note */}
      <p className="text-gray-500 text-sm mt-8">
        © 2026 MonSiteWeb. Tous droits réservés.
      </p>
    </div>
  );
}
