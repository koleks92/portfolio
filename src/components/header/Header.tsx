import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <span>&lt; Jan Sebastian Konieczek /&gt;</span>
      </div>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div>
        <a href="mailto:konieczekjan@gmail.com">konieczekjan@gmail.com</a>
      </div>
    </header>
  );
}
