import styles from "./Hero.module.css";
import Typewriter from "typewriter-effect";
import me from "../../assets/images/me/me4.png";
import ArrowUpRight from "../UI/ArrowUpRight";
import GalleryTech from "./GalleryTech";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.aboutContainer}>
        <p className={styles.typewriter}>
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Mobile Developer",
                "Home Automation Enthusiast",
                "Python Tinkerer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <div className={styles.nameContainer}>
          <h1>Jan</h1>
          <h1>Sebastian</h1>
          <h1>Konieczek</h1>
        </div>
        <p className={styles.aboutText}>
          Full-stack developer, Python enthusiast, Linux tinkerer, and
          smart-home builder. I love turning code, hardware, and technology into
          solutions that actually make life smarter.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={me} alt="Jan Sebastian Konieczek" />
      </div>
      <div className={styles.socialContainer}>
        <a href="https://www.github.com/koleks92">
          GitHub <ArrowUpRight />
        </a>
        <a href="mailto:konieczekjan@gmail.com">
          Email <ArrowUpRight />
        </a>
        <a href="https://dk.linkedin.com/in/jan-konieczek">
          LinkedIn <ArrowUpRight />
        </a>
        <a href="https://codewars.com/users/koleks92">
          Codewars <ArrowUpRight />
        </a>
      </div>
      <div className={styles.techContainer}>
        <GalleryTech />
        <div className={styles.scrollHint}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
