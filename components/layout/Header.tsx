"use client";
import { useState} from "react";
import Logo from "@/components/ui/Logo";
import Navbar from "@/components/ui/Navbar";
import { Menu, X } from "lucide-react";

export default function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#212121]/95 backdrop-blur-md shadow-lg border-b border-[#2d2d2d]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Navbar />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#212121]/95 backdrop-blur-md border-t border-[#2d2d2d]">
          <Navbar mobile onItemClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
