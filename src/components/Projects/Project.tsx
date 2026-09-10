import styles from "./Project.module.css";

export default function Project() {
  return (
    <section className={styles.project}>
      <div className={styles.imageContainer}></div>
      <div className={styles.descriptionContainer}>
        <h3 className={styles.title}></h3>
        <p className={styles.description}></p>
        <div className={styles.tags}></div>
      </div>
    </section>
  );
}
