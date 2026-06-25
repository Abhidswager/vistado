import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Tools from '@/components/Tools';
import Background from '@/components/Background';
import Portfolio from '@/components/Portfolio';
import Achievements from '@/components/Achievements';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { profile } from '@/lib/content';

export default function Home() {
  const { marqueeWords } = profile;
  return (
    <div
      id="top"
      style={{
        fontFamily: "'Manrope',sans-serif",
        color: '#15140F',
        background: '#F4F1EC',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <Navbar />
      <Hero />
      <Marquee words={marqueeWords} rotate={-1.4} duration={26} />
      <About />
      <Services />
      <Tools />
      <Marquee words={marqueeWords} rotate={1.2} duration={30} reverse dim marginTop={0} marginBottom={40} />
      <Background />
      <Portfolio />
      <Achievements />
      <Testimonials />
      <Contact />
      <Faq />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
