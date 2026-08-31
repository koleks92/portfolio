import { useEffect, useState } from "react";
import "./../../styles/cloud.css";

export default function Cloud() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      const percent = (scrollY / (scrollHeight - viewportHeight)) * 100;

      console.log(percent);

      setShow(percent >= 85);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <div className="my-30 mx-20">
      <div className="sun_container">
        <div className={`yellow ${show ? "show" : "hide"}`} />
        <div className={`yellow glow ${show ? "show" : "hide"}`} />
      </div>
      <div className="cloud" />
    </div>
  );
}
