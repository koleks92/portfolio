import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Cloud.module.css";

export default function CloudCombined() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      const percent = (scrollY / (scrollHeight - viewportHeight)) * 100;
      const isHighPercent = percent >= 95;

      setShow(isHighPercent);
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.cloud} />
      <div
        className={clsx(styles.yellow, show ? styles.showSun : styles.hideSun)}
      />
      <div
        className={clsx(
          styles.yellow,
          styles.glow,
          show ? styles.showSun : styles.hideSun,
        )}
      />
    </div>
  );
}
