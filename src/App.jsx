import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useCustomCursor } from './hooks/useCustomCursor'
import { ThemeProvider } from './hooks/useTheme'

/**
 * App — Root component that assembles all portfolio sections
 * in the correct order with proper semantic structure.
 */
export default function App() {
  useCustomCursor()

  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
