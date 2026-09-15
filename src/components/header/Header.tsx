import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <span>&lt; Jan Sebastian Konieczek /&gt;</span>
      </div>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#footer">Thanks</a>
      </nav>
      <div className={styles.email}>
        <a href="mailto:konieczekjan@gmail.com">konieczekjan@gmail.com</a>
      </div>
    </header>
  );
}
