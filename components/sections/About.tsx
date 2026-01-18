import Image from "next/image";
import SocialIcons from "../ui/SocialIcon";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Image de rawdha */}
          <div className="lg:order-2 flex-shrink-0">
            <Image
              src="/image_logo/Rawdha_Mahmoud.jpeg"
              alt="Rawdha Mahmoud"
              width={500}
              height={500}
              className="rounded-full object-cover"
              priority
            />
          </div>

          {/* description */}
          <div className="lg:order-1 flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Rawdha Mahmoud
            </h1>
            <h2 className="flex  ml-20 justify-center  items-center">
              <Image
                src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&width=435&lines=Technicienne+Informatique;+d%C3%A9veloppeuse+web"
                alt="Typing SVG"
                width={435}
                height={50}
                unoptimized
              />
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 ">
              <p className="text-lg sm:text-xl text-center text-gray-300 leading-relaxed max-w-2xl">
                Je suis étudiante en deuxième année de classe préparatoire
                intégrée en informatique au CESI. Passionnée par le
                développement logiciel, les réseaux et les technologies
                émergentes, j&apos;aime analyser des problématiques complexes et
                créer des solutions efficaces et maintenables.
              </p>

              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
