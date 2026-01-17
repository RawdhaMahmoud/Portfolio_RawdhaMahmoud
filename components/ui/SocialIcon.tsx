import { Linkedin, Instagram, Github } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://www.linkedin.com/in/rawdha-mahmoud/"
        target="_blank"
        className="p-3 rounded-xl border border-white/10 text-gray-400 
                   hover:text-blue-500  hover:border-blue-500 
                   transition"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>

      <a
        href="https://www.instagram.com/mahmoud_rawdha/"
        target="_blank"
        className="p-3 rounded-xl border border-white/10 text-gray-400 
                   hover:text-pink-500  hover:border-pink-500 
                   transition"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>

      <a
        href="https://github.com/RawdhaMahmoud"
        target="_blank"
        className="p-3 rounded-xl border border-white/10 text-gray-400 
                   hover:text-white hover:border-gray-300 
                   transition"
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
    </div>
  );
}
