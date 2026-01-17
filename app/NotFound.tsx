
"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#212121] via-[#2d2d2d] to-[#212121] px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">
            Oops! Page introuvable
          </h2>
          <p className="text-gray-400 text-lg">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/"
            className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30"
          >
            <Home className="w-5 h-5" />
            Retour à l&apos;accueil
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-800/80 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-700/50"
          >
            <ArrowLeft className="w-5 h-5" />
            Page précédente
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
