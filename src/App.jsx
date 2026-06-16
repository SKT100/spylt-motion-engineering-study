import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";
import Message from "./sections/Message";
import Flavour from "./sections/Flavour";
import { useGSAP } from "@gsap/react";
import Nutrition from "./sections/Nutrition";
import Benefit from "./sections/Benefit";
import Testimonial from "./sections/Testimonial";
import Footer from "./sections/Footer";
import Menu from "./components/Menu";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

if (typeof window !== "undefined") {
  window.gsap = gsap;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSmootherReady, setIsSmootherReady] = useState(false);

  // Force scroll to top on reload and disable browser scroll memory
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    // Only create the ScrollSmoother once the loader is gone and content exists
    if (!isLoading) {
      const smoother = ScrollSmoother.create({
        smooth: 2.5,
        effects: true,
      });
      setIsSmootherReady(true);

      // Proper cleanup: Kill the smoother if the user clicks the logo to load again
      return () => {
        if (smoother) smoother.kill();
        setIsSmootherReady(false);
      };
    }
  }, [isLoading]); // Re-run this effect whenever isLoading changes

  return (
    <main>
      <Loader 
        isLoading={isLoading} 
        onComplete={() => setIsLoading(false)} 
      />

      <Navbar onLogoClick={() => setIsLoading(true)} />
      <Menu />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          
          {/* Conditional Rendering: Everything inside here waits for the loader and ScrollSmoother initialization */}
          {!isLoading && isSmootherReady && (
            <>
              <Hero />
              <Message />
              <Flavour />
              <Nutrition />
              <div>
                <Benefit />
                <Testimonial />
              </div>
              <Footer />
            </>
          )}

        </div>
      </div>
    </main>
  );
}

export default App;