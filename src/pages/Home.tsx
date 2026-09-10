import AOS from "aos";
import { useEffect, useState } from "react";
import IntroAnimation from "../components/UI/IntroAnimation";
import clsx from "clsx";
import styles from "./Home.module.css";
import "../styles/aos.css";
import Header from "../components/Header/Header";

function Home() {
  const [split, setSplit] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
    });
  }, [split]);

  return (
    <div id="wrapper">
      <IntroAnimation split={split} onComplete={() => setSplit(true)} />
      <div className={clsx(styles.page, split && styles.visible)}>
        <Header />
      </div>
    </div>
  );
}

export default Home;
