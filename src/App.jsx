import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Metrics from './components/Metrics.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'
import Petals from './components/Petals.jsx'
import { usePalette } from './hooks/usePalette.js'

export default function App() {
  const [palette, setPalette] = usePalette()

  return (
    <>
      <Petals palette={palette} />
      <div className="wrap">
        <Nav palette={palette} onPaletteChange={setPalette} />
        <Hero />
        <Metrics />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Footer />
      </div>
    </>
  )
}
