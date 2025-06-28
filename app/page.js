import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <>
     <section
  id="hero"
  className="py-24 px-6 bg-gray-50 text-center flex flex-col items-center justify-center"
>
  <h1 className="text-5xl font-bold text-blue-600 mb-4">Hi, I’m Dheeraj Bishwas 👋</h1>
  <p className="text-xl text-gray-700 mb-2">Backend & Full Stack Developer</p>
  <p className="text-md text-gray-500 mb-4">5+ years experience in scalable web app development</p>
  <div className="flex flex-wrap justify-center gap-4">
    <a href="#projects" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
      View Projects
    </a>
    <a href="#contact" className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-50">
      Contact Me
    </a>
  </div>
</section>


      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
