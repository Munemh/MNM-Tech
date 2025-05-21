"use client"
// import { TopNav, AboutUsCard, Footer, ServicesSection, HomeSection } from "../components/top_nav";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js";
import SwiperCarousel from "../components/Crousal";
import { Background, TextContent } from "../components/Background";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { TopNav } from "../components/TopNav";
import { HomeSection } from "../components/HomeSection";
import { AboutUsCard } from "../components/AboutUsCard";
import { ServicesSection } from "../components/ServiceSection";
import Footer from "../components/Footer";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const textContentRef = useRef(null);
  const contactRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const homeControls = useAnimation();
  const aboutControls = useAnimation();
  const servicesControls = useAnimation();
  const textContentControls = useAnimation();

  const homeInView = useInView(homeRef, { once: true, amount: 0.5 });
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.5 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.5 });
  const textContentInView = useInView(textContentRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (homeInView) homeControls.start("visible");
    if (aboutInView) aboutControls.start("visible");
    if (servicesInView) servicesControls.start("visible");
    if (textContentInView) textContentControls.start("visible");
  }, [homeInView, aboutInView, servicesInView, textContentInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col w-full">
        <TopNav />
        <div ref={scrollContainerRef} className="overflow-y-auto p-6 bg-black" style={{ justifyContent: 'center' }}>
          <motion.div
            id="home"
            initial="hidden"
            animate={homeControls}
            variants={fadeInUp}
            ref={homeRef}
          >
            <SwiperCarousel />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={textContentControls}
            variants={fadeInUp}
            ref={textContentRef}
          >
            <TextContent />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={homeControls}
            variants={fadeInUp}
          >
            <HomeSection />
          </motion.div>

          <motion.div
            id="about"
            initial="hidden"
            animate={aboutControls}
            variants={fadeInUp}
            ref={aboutRef}
          >
            <AboutUsCard />
          </motion.div>

          <motion.div
            id="services"
            initial="hidden"
            animate={servicesControls}
            variants={fadeInUp}
            ref={servicesRef}
          >
            <ServicesSection />
          </motion.div>

          <div id="contact" ref={contactRef}>
            <Footer />
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          ↑ Top
        </button>
      </div>
    </div>
  );
}
