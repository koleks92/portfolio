import type React from "react";
import clsx from "clsx";
import Dropdown from "./Dropdown";
import { useState } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.header}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div id="header" className={styles.bar}>
        <h2 className={styles.title}>{children}</h2>
      </div>
      <div className={clsx(styles.dropdownWrap, open && styles.dropdownOpen)}>
        <Dropdown />
      </div>
    </div>
  );
}
