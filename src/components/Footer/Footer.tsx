import ArrowUpRight from "../UI/ArrowUpRight";
import CloudCombined from "./CloudCombined";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <h2>WITH GRATITUDE</h2>
      <section className={styles.gratitudesContainer}>
        <div className={styles.gratitude}>
          <h4 className={styles.gratitudeTitle}>FAMILY</h4>
          <p className={styles.gratitudeText}>
            To my parents and siblings — thank you for always believing in me,
            even when I was just staring at a screen for hours on end. None of
            this would exist without your unconditional support.
          </p>
        </div>
        <div className={styles.gratitude}>
          <h4 className={styles.gratitudeTitle}>MY LOVE</h4>
          <p className={styles.gratitudeText}>
            To my girlfriend — for tolerating the late nights, the endless "just
            one more commit", and somehow still being my biggest fan. You make
            the hard days worth it.
          </p>
        </div>
        <div className={styles.gratitude}>
          <h4 className={styles.gratitudeTitle}>THE COMMUNITY</h4>
          <p className={styles.gratitudeText}>
            To every open-source contributor, blogger, and stranger on the
            internet who shared their knowledge freely. You taught me more than
            any textbook ever could.
          </p>
        </div>
      </section>
      <section className={styles.extraContainer}>
        <div className={styles.cloudContainer}>
          <CloudCombined />
        </div>
        <div className={styles.thanksContainer}>
          <h2 className={styles.thanksTitle}>THANKS FOR VISITING</h2>
          <p className={styles.thanksText}>
            Built with TypeScript, React, and Vite. Hosted on Vercel. Designed
            in Figma Make.
          </p>
        </div>
      </section>
      <div className={styles.socialContainer}>
        <a href="https://www.github.com/koleks92">GitHub</a>
        <a href="mailto:konieczekjan@gmail.com">Email</a>
        <a href="https://dk.linkedin.com/in/jan-konieczek">LinkedIn</a>
        <a href="https://codewars.com/users/koleks92">Codewars</a>
        <p className={styles.copyrights}>© 2026 — Jan Sebastian Konieczek</p>
      </div>
    </footer>
  );
}
