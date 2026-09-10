import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Cloud.module.css";

export default function CloudCombined() {
  const [show, setShow] = useState<boolean>(false);
  const [hideRain, setHideRain] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      const percent = (scrollY / (scrollHeight - viewportHeight)) * 100;
      const isHighPercent = percent >= 90;

      setShow(isHighPercent);
      setHideRain(isHighPercent);
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.sunRainContainer}>
        <div className={styles.sunContainer}>
          <div
            className={clsx(
              styles.yellow,
              show ? styles.showSun : styles.hideSun,
            )}
          />
          <div
            className={clsx(
              styles.yellow,
              styles.glow,
              show ? styles.showSun : styles.hideSun,
            )}
          />
        </div>
        <div className={styles.rainContainer}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className={clsx(
                styles.rain,
                i % 2 === 0 && styles.rainTop,
                hideRain && styles.hideRain,
              )}
            />
          ))}
        </div>
      </div>
      <div className={styles.cloud} />
    </div>
  );
}
