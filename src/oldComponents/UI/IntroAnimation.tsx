import { useEffect } from "react";
import clsx from "clsx";
import styles from "./IntroAnimation.module.css";

export default function IntroAnimation({
  split,
  onComplete,
}: {
  split: boolean;
  onComplete: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={clsx(styles.overlay, split && styles.hidden)}>
      <div className={styles.text}>
        <span className={clsx(styles.bracket, split && styles.left)}>&lt;</span>
        <span className={clsx(styles.bracket, split && styles.opacity)}>/</span>
        <span className={clsx(styles.bracket, split && styles.right)}>
          &gt;
        </span>
      </div>
    </div>
  );
}
