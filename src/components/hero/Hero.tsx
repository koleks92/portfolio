import picture from "../../assets/images/me/temp.png";
// import picture from "../../assets/images/me/me3.png";
import Typewriter from "typewriter-effect";
import LightRays from "../UI/Rays";
import GalleryHero from "./GalleryHero";
import Page from "../UI/Page";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Page style="dark">
      <div className={styles.raysWrap}>
        <LightRays
          raysOrigin="top-left"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={picture} className={styles.photo} />
          <span className={styles.role}>
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
          </span>
        </div>
        <div className={styles.right}>
          <GalleryHero />
        </div>
      </div>
      <div className={styles.scrollHint}>
        <svg
          width="24"
          height="24"
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
    </Page>
  );
}
