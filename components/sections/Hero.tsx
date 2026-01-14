export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          Rawdha Mahmoud
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Full Stack Developer | Creative Problem Solver
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
