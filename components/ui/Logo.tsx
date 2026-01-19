import Image from "next/image";
import logo from "@/public/image_logo/logoRawdha.png";

export default function Logo() {
  return (
    <a href="#about" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-r " />
        <Image
          src={logo}
          alt="Rawdha Mahmoud"
          width={120}
          height={120}
          className="relative rounded-full"
        />
      </div>
    </a>
  );
}
