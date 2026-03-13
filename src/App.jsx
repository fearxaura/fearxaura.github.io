import { HelmetProvider, Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>FEARLESS | Professional Developer Portfolio</title>
        <meta name="description" content="Full-stack developer specializing in React, Node.js, Telegram bots, and VPS infrastructure." />
        <meta property="og:title" content="FEARLESS | Dev Portfolio" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  )
}
