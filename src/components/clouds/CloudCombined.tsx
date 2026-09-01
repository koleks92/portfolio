import { useEffect, useState } from "react";
import "./../../styles/cloud.css";

export default function CloudCombined() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      const percent = (scrollY / (scrollHeight - viewportHeight)) * 100;

      const rain = document.querySelectorAll(".rain");
      console.log(rain);

      const isHighPercent = percent >= 85;
      setShow(isHighPercent);

      rain.forEach((r) => {
        if (isHighPercent) {
          r.classList.add("hideRain");
        } else {
          r.classList.remove("hideRain");
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="root">
      <div className="sunRainContainer">
        <div className={`sunContainer`}>
          <div className={`yellow ${show ? "showSun" : "hideSun"}`} />
          <div className={`yellow glow ${show ? "showSun" : "hideSun"}`} />
        </div>
        <div className={`rainContainer `}>
          <span className="rain rainTop" />
          <span className="rain" />
          <span className="rain rainTop" />
          <span className="rain" />
          <span className="rain rainTop" />
          <span className="rain" />
          <span className="rain rainTop" />
          <span className="rain" />
          <span className="rain rainTop" />
          <span className="rain" />
          <span className="rain rainTop" />
          <span className="rain" />
        </div>
      </div>
      <div className="cloud" />
    </div>
  );
}
