import avocadoro1 from "../assets/images/apps/avocadoro/avocadoro2_wide.png";
import dishdate1 from "../assets/images/apps/dishdate/dishdate_wide.png";
import type { ProjectType } from "../types/project";

export const projectsData: ProjectType[] = [
  {
    title: "Avocadoro",
    url: "https://github.com/koleks92/Avocadoro",
    description:
      "Avocadoro is a Pomodoro-style productivity app built with React, ReactNative, TypeScript, Electron, and Supabase. It helps you focus on your study or learning sessions, track breaks, and visualize your progress over time. ",
    img: avocadoro1,
    tags: ["React Native"],
  },
  {
    title: "DishDate",
    url: "https://github.com/koleks92/DishDate",
    description:
      "DishDate is a fun, interactive app where two users go through a set of dish cards, swiping left or right based on their preferences. The app then shows how many dishes they both liked, helping people bond over shared tastes in food. ",
    img: dishdate1,
    tags: ["React Native", "Supabase"],
  },
  {
    title: "AvocadoroMobile",
    url: "https://github.com/koleks92/AvocadoroMobile",
    description:
      "Avocadoro is a Pomodoro-style productivity app built with React, ReactNative, TypeScript, Electron, and Supabase. It helps you focus on your study or learning sessions, track breaks, and visualize your progress over time. ",
    img: avocadoro1,
    tags: ["React Native"],
  },
];
