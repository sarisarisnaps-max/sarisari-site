import Nav from './components/Nav'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ValueProps from './components/ValueProps'
import Lineup from './components/Lineup'
import Gallery from './components/Gallery'
import EmailCapture from './components/EmailCapture'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-page font-sans text-ink">
      <Nav />
      <Hero />
      <HowItWorks />
      <ValueProps />
      <Lineup />
      <Gallery />
      <EmailCapture />
      <Footer />
    </div>
  )
}
