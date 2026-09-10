import clsx from "clsx";
import type { AppData } from "../../data/projectsData";
import Page from "../UI/Page";
import styles from "./AppSection.module.css";

type AppProps = {
  data: AppData;
};

export default function AppSection({ data }: AppProps) {
  const isDark = data.color === "dark";

  console.log(isDark);

  return (
    <Page style={data.color}>
      {/* Title */}
      <div className={clsx(styles.title, !isDark && styles.darkText)}>
        <h1 data-aos="zoom-in">{data.title}</h1>
      </div>

      {/* Row 1 */}
      <div className={styles.row1}>
        <div
          className={`${styles.textBox1} ${
            isDark ? styles.textOnLight : styles.textOnDark
          }`}
          data-aos="fade-right"
        >
          <span className={styles.text}>{data.description1}</span>
        </div>
        <div className={styles.imageWrap} data-aos="fade-left">
          <img src={data.image1} alt={data.title} className={styles.image} />
        </div>
      </div>

      {/* Row 2 */}
      <div className={styles.row2}>
        <div className={styles.imageWrap} data-aos="fade-right">
          <img src={data.image2} alt={data.title} className={styles.image} />
        </div>
        <div
          className={`${styles.textBox2} ${
            isDark ? styles.textOnLight : styles.textOnDark
          }`}
          data-aos="fade-left"
        >
          <span className={styles.text}>{data.description2}</span>
        </div>
      </div>
    </Page>
  );
}
