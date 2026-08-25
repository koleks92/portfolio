import { useEffect, useState } from "react";
import "../../styles/gallery.css";
import temp from "../../assets/images/apps/temp.png";

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

  const images: string[] = [temp, temp, temp];

  const nextIndex = () => {
    setVisibleIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousIndex = () => {
    setVisibleIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center z-2">
      <div className="flex justify-center items-center relative w-full h-full">
        {images.map((item, index) => (
          <img
            src={item}
            alt="Temp"
            key={index}
            className={`imageCustom ${index === visibleIndex ? "visible" : "notVisible"}`}
          />
        ))}
      </div>
      <div>
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
