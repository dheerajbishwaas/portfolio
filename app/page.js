import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 px-6 py-24 text-center transition-colors duration-500"
      >
        {/* Background Effects (Adapts to Light/Dark) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          {/* Profile Image with glowing border */}
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-600 dark:to-cyan-400 rounded-full blur opacity-50 dark:opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <img
              src="/profile.jpeg"
              alt="Dheeraj Bishwas"
              className="relative w-40 h-40 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Typography */}
          <div className="space-y-4 mb-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 text-blue-700 dark:border-slate-700/50 dark:bg-slate-800/50 backdrop-blur-sm dark:text-blue-400 text-sm font-medium tracking-wide mb-2 transition-colors duration-500">
              Available for New Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors duration-500">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Dheeraj</span> 👋
            </h1>
            <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-medium font-mono transition-colors duration-500">
              Senior Backend Developer
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mt-4 transition-colors duration-500">
              With over <strong>6 years of experience</strong> crafting highly scalable, performant, and secure backend architectures. Specializing in Node.js, Cloud Infrastructure, and complex system design.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-lg bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30 hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-md shadow-sm"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
