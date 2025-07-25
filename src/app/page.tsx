import About from './sections/About';
import Hero from './sections/Hero';
import WhyUs from './sections/WhyUs';
import Specials from './sections/Specials';
import Events from './sections/Events';
//import Booking from './components/Booking';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Chefs from './sections/Chefs';
//import Contact from './sections/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="main">
        <Chefs />
        <About />
        <WhyUs />
        <Specials />
        <Events />
        {/* <Booking /> */}
        <Testimonials />
        <Gallery />
        {/* <Contact /> */}
      </div>
    </div>
  );
}