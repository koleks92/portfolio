import { useEffect, useState } from "react";
import "../../styles/gallery.css";
import avocadoro from "../../assets/images/apps/avocadoro/avocadoro1.png";
import dishdate from "../../assets/images/apps/dishdate/dishdate_wide.png";
import beatit from "../../assets/images/apps/beatit/beatit_wide.png";

type App = {
  name: string;
  description: string;
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
      description: "Avocadoro App",
      src: avocadoro,
    },
    {
      name: "DishDate",
      description: "DishDate App",
      src: dishdate,
    },
    {
      name: "BeatIt",
      description: "BeatIt App",
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
    <div className="flex flex-col w-full h-full justify-center items-center z-2">
      <div className="flex justify-center items-center relative w-full h-full">
        {apps.map((item, index) => (
          <img
            src={item.src}
            alt={item.name}
            key={index}
            className={`imageCustom ${index === visibleIndex ? "visible" : "notVisible"}`}
          />
        ))}
      </div>
      <div className="flex w-full flex-1 justify-around">
        <button onClick={() => previousIndex()} className="mx-4 text-3xl ">
          &lt;
        </button>
        <button onClick={() => nextIndex()} className="mx-4 text-3xl ">
          &gt;
        </button>
      </div>
    </div>
  );
}
