import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import AOS from "aos";
import AppSection from "../components/appSection/AppSection";
import { useEffect, useState } from "react";
import IntroAnimation from "../components/UI/IntroAnimation";
import "../styles/aos.css";
import { apps } from "../data/apps";
import Footer from "../components/footer/Footer";

function Home() {
  const [split, setSplit] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
    });
  }, [split]);

  return (
    <>
      <IntroAnimation split={split} onComplete={() => setSplit(true)} />
      <div
        className={`min-h-screen flex flex-col transition-opacity duration-700 ${split ? "opacity-100" : "opacity-0"
          }`}
      >
        <nav>
          <Header>Jan Sebastian Konieczek</Header>
        </nav>
        <main className="flex-1">
          <div id="hero" className="scroll-mt-15">
            <Hero />
          </div>
          {apps.map((app) => (
            <div
              key={app.id}
              id={app.id}
              className={`scroll-mt-15 w-full ${app.color === "dark" ? "bg-dark-mid" : "bg-light"}`}
            >
              <AppSection data={app} />
            </div>
          ))}
          <section id="footer">
            <Footer />
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
