import { Heart } from "lucide-react";
import SocialIcons from "../ui/SocialIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
          
          {/* Social Icons */}
          <SocialIcons />

          {/* Copyright */}
          <p className="text-sm text-gray-400 flex items-center gap-2 text-center">
            Conçu avec
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            par
            <span className="text-white font-medium">
              Rawdha Mahmoud
            </span>
            © {currentYear}
          </p>

        </div>
      </div>
    </footer>
  );
}
