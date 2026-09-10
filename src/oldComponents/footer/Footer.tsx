import Page from "../UI/Page";
import CloudCombined from "../clouds/CloudCombined";
import GalleryTech from "../gallery/GalleryTech";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Page style="dark">
      <CloudCombined />
      <h4 className={styles.thanks}>
        This <strong>site</strong> (and honestly, every project I've ever
        shipped) wouldn't exist without my <strong>family</strong> for the
        endless support, my <strong>Sana</strong> for putting up with "just one
        more screen", <strong>Google</strong> for having the answer to
        everything, <strong>Stack Overflow</strong> for having the answer to
        everything else, <strong>MDN</strong> for actually explaining how things
        work, <strong>CS50</strong> for teaching me how to think like this in
        the first place, <strong>freeCodeCamp</strong> for the endless free
        lessons, and yeah — <strong>Claude AI</strong> too, for the rubber-duck
        sessions.
      </h4>
      <div className={styles.techSection}>
        <h2 className={styles.techTitle}>Technologies &amp; Tools</h2>
        <GalleryTech />
      </div>
    </Page>
  );
}
