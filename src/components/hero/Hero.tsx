import picture from "../../assets/images/me/me3.png";

import Typewriter from "typewriter-effect";
import LightRays from "../UI/Rays";

export default function Hero() {
  return (
    <>
      <div className="flex h-screen max-w-7xl mx-auto flex-col justify-evenly items-center bg-dark-mid text-text-muted gap-2">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LightRays
            raysOrigin="top-left"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-100">
          <img src={picture} className="w-80 m-10 rounded-full" />
          <span className="text-2xl tracking-wide text-text-primary text-center">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Mobile Developer",
                  "Home Automation Enthusiast",
                  "Python Tinkerer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </>
  );
}
