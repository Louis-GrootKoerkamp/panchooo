import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import ImageGallery from './components/ui/image-gallery';
import Philosophy from './components/Philosophy';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

export default function App() {
  return (
    <div className="relative min-h-screen bg-deep-black selection:bg-blood-red selection:text-white overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <About />
        <ImageGallery />
        <Philosophy />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
