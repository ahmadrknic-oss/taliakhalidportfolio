import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-navy text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-slate-800 bg-navy-dark">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Talia Khalid. M&E Portfolio.
          </div>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
