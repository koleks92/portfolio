import AOS from "aos";
import { useEffect, useState } from "react";
import IntroAnimation from "../components/UI/IntroAnimation";
import clsx from "clsx";
import styles from "./Home.module.css";
import "../styles/aos.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

function Home() {
  const [split, setSplit] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
    });
  }, [split]);

  return (
    <div id="wrapper">
      {/* Animation */}
      <IntroAnimation split={split} onComplete={() => setSplit(true)} />
      {/* Page */}
      <div className={clsx(styles.page, split && styles.visible)}>
        <Header />
        <main>
          <Hero />
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default Home;
