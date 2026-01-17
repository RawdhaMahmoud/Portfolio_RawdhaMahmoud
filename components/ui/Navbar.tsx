import DownloadButton from "./DownloadButton";
import { Home, Code, Folder, Mail } from "lucide-react";

interface NavbarProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export default function Navbar({ mobile, onItemClick }: NavbarProps) {
  const items = [
    { label: "Accueil", href: "about", icon: Home },
    { label: "Compétences", href: "skills", icon: Code },
    { label: "Projets", href: "projects", icon: Folder },
    { label: "Contact", href: "contact", icon: Mail },
  ];

  return (
    <nav className={mobile ? "flex flex-col py-4" : "flex items-center gap-2"}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.href}
            href={`#${item.href}`}
            onClick={onItemClick}
            className={
              mobile
                ? "flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                : "flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all relative group"
            }
          >
            <Icon className="w-4 h-4 opacity-80 group-hover:opacity-100" />
            <span>{item.label}</span>

            {!mobile && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-blue-500 to-indigo-600 group-hover:w-3/4 transition-all duration-300" />
            )}
          </a>
        );
      })}

      <div className={mobile ? "px-6 py-2" : "ml-2"}>
        <DownloadButton />
      </div>
    </nav>
  );
}
