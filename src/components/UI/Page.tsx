import clsx from "clsx";
import styles from "./Page.module.css";

type PageProps = {
  style: "dark" | "light";
  children: React.ReactNode;
};

export default function Page({ style, children }: PageProps) {
  return (
    <div
      className={clsx(
        styles.page,
        style === "dark" ? styles.dark : styles.light,
      )}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
