import { useTheme } from './hooks/useTheme';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useActiveSection } from './hooks/useActiveSection';

import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Formations from './components/Formations';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const SECTION_IDS = ['hero', 'about', 'formations', 'skills', 'projects', 'contact'];

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const { progress, scrolled, showBackToTop } = useScrollProgress();
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <ScrollProgress progress={progress} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} scrolled={scrolled} activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Formations />
        <Skills isDark={isDark} />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop show={showBackToTop} />
    </>
  );
}
