import { useEffect, useState } from "react";
import "../../styles/gallery.css";
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
    <div className="flex flex-col w-full h-full justify-center items-center z-2 rounded-[4rem] bg-dark p-6">
      <div className="flex justify-center items-center my-2 relative w-full h-full">
        {apps.map((item, index) => (
          <>
            <img
              src={item.src}
              alt={item.name}
              key={index}
              className={`imageCustom ${index === visibleIndex ? "visible" : "notVisible"}`}
            />
            <div
              className={`textCustom ${index === visibleIndex ? "visible" : "notVisible"}`}
            >
              <h3 className="text-center my-2">{item.name}</h3>

              {item.description.map((desc, descIndex) => {
                return (
                  <div
                    className="flex flex-col text-center text-xl py-1"
                    key={descIndex}
                  >
                    <span className="font-bold">{desc.textOne}</span>
                    <span>{desc.textTwo}</span>
                  </div>
                );
              })}
            </div>
          </>
        ))}
      </div>

      <div className="flex w-full flex-1 justify-around mb-4">
        <button onClick={() => previousIndex()} className="mx-4 text-3xl ">
          <FontAwesomeIcon icon={faChevronLeft} />{" "}
        </button>
        <button onClick={() => nextIndex()} className="mx-4 text-3xl ">
          <FontAwesomeIcon icon={faChevronRight} />{" "}
        </button>
      </div>
    </div>
  );
}
