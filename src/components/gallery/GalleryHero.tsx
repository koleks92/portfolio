import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./GalleryHero.module.css";
import avocadoro from "../../assets/images/apps/avocadoro/avocadoro2_wide.png";
import dishdate from "../../assets/images/apps/dishdate/dishdate_wide.png";
import beatit from "../../assets/images/apps/beatit/beatit_wide.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type Description = {
  textOne: string;
  textTwo: string;
};

type App = {
  name: string;
  description: Description[];
  src: string;
};

export default function GalleryHero() {
  const [visibleIndex, setVisibleIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextIndex();
    }, 15000);

    return () => {
      clearInterval(timer);
    };
  }, [visibleIndex]);

  const apps: App[] = [
    {
      name: "Avocadoro",
      description: [
        { textOne: "React + Electron", textTwo: "desktop app" },
        { textOne: "React Native + TypeScript", textTwo: "mobile app" },
        { textOne: "Supabase", textTwo: "user data & progress sync" },
      ],
      src: avocadoro,
    },
    {
      name: "DishDate",
      description: [
        { textOne: "React + Electron", textTwo: "desktop app" },
        { textOne: "React Native + TypeScript", textTwo: "mobile app" },
        { textOne: "Supabase", textTwo: "user data & progress sync" },
      ],
      src: dishdate,
    },
    {
      name: "BeatIt",
      description: [
        { textOne: "React + Electron", textTwo: "desktop app" },
        { textOne: "React Native + TypeScript", textTwo: "mobile app" },
        { textOne: "Supabase", textTwo: "user data & progress sync" },
      ],
      src: beatit,
    },
  ];

  const nextIndex = () => {
    setVisibleIndex((prev) => (prev === apps.length - 1 ? 0 : prev + 1));
  };

  const previousIndex = () => {
    setVisibleIndex((prev) => (prev === 0 ? apps.length - 1 : prev - 1));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.stage}>
        {apps.map((item, index) => (
          <>
            <img
              src={item.src}
              alt={item.name}
              key={index}
              className={clsx(
                styles.imageCustom,
                index === visibleIndex ? styles.visible : styles.notVisible,
              )}
            />
            <div
              className={clsx(
                styles.textCustom,
                index === visibleIndex ? styles.visible : styles.notVisible,
              )}
            >
              <h3 className={styles.title}>{item.name}</h3>

              {item.description.map((desc, descIndex) => {
                return (
                  <div className={styles.descRow} key={descIndex}>
                    <span className={styles.descBold}>{desc.textOne}</span>
                    <span>{desc.textTwo}</span>
                  </div>
                );
              })}
            </div>
          </>
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={() => previousIndex()} className={styles.navButton}>
          <FontAwesomeIcon icon={faChevronLeft} />{" "}
        </button>
        <button onClick={() => nextIndex()} className={styles.navButton}>
          <FontAwesomeIcon icon={faChevronRight} />{" "}
        </button>
      </div>
    </div>
  );
}
