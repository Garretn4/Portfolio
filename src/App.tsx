import Nav from './components/Nav.tsx'
import Hero from './components/Hero.tsx'
import Projects from './components/Projects.tsx'
import About from './components/About.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  )
}
