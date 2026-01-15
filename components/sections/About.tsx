import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-row items-center justify-center bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-row w-auto mx-auto text-center">
        {/* Image de rawdha */}
        <div className="order-2 flex-0.5 mb-8">
          <Image
            src="/image_logo/Rawdha_Mahmoud.png"
            alt="Rawdha Mahmoud"
            width={250}
            height={250}
            className="rounded-full mx-auto border-4 border-blue-500 shadow-2xl shadow-blue-500/50"
            priority
          />
        </div>

        {/* description */}
        <div className="order-1 flex-1 space-y-6 w-full px-4 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Rawdha Mahmoud
          </h1>
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&width=435&lines=Technicien+Informatique;+d%C3%A9veloppeuse+web"
              alt="Typing SVG"
              width={435}
              height={50}
              unoptimized
            />
          </div>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Je suis étudiante en deuxième année de classe préparatoire intégrée
            en informatique au CESI. Passionnée par le développement logiciel,
            les réseaux et les technologies émergentes, j&apos;aime analyser des
            problématiques complexes et créer des solutions efficaces et
            maintenables.
          </p>
        </div>
      </div>
    </section>
  );
}
