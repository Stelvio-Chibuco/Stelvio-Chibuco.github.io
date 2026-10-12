import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { About, Contact, Services } from './components/Sections'
import { LangProvider } from './i18n'

export default function App() {
  return (
    <LangProvider>
      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
    </LangProvider>
  )
}
