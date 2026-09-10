import { apps } from "../../data/apps";
import styles from "./Dropdown.module.css";

export default function Dropdown() {
  return (
    <div className={styles.dropdown}>
      <a className={styles.link} key="hero" href="#hero">
        Hero
      </a>

      {apps.map((app) => (
        <a className={styles.link} key={app.title} href={"#" + app.id}>
          {app.title}
        </a>
      ))}
      <a className={styles.link} key="footer" href="#footer">
        Footer
      </a>
    </div>
  );
}
