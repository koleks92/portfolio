import styles from "./Hero.module.css";
import Typewriter from "typewriter-effect";
import me from "../../assets/images/me/me4.png";
import ArrowUpRight from "../UI/ArrowUpRight";
import GalleryTech from "./GalleryTech";

export default function Hero() {
  return (
    <section className={styles.hero}>
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
          Linkedin <ArrowUpRight />
        </a>
        <a href="https://codewars.com/users/koleks92">
          Codewars <ArrowUpRight />
        </a>
      </div>
      <div className={styles.techContainer}>
        <h3></h3>
        <GalleryTech />
      </div>
    </section>
  );
}
