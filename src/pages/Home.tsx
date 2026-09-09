import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import AOS from "aos";
import AppSection from "../components/appSection/AppSection";
import { useEffect, useState } from "react";
import IntroAnimation from "../components/UI/IntroAnimation";
import clsx from "clsx";
import styles from "./Home.module.css";
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
      <div className={clsx(styles.page, split && styles.visible)}>
        <nav>
          <Header>Jan Sebastian Konieczek</Header>
        </nav>
        <main className={styles.main}>
          <Hero />
          {apps.map((app) => (
            <div
              key={app.id}
              id={app.id}
              className={clsx(
                styles.appSection,
                app.color === "dark" ? styles.dark : styles.light,
              )}
            >
              <AppSection data={app} />
            </div>
          ))}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Home;
