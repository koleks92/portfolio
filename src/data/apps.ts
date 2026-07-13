import avocadoro1 from "../assets/images/apps/avocadoro/avocadoro1.png"
import avocadoro2 from "../assets/images/apps/avocadoro/avocadoro2.png"
import dishdate1 from "../assets/images/apps/dishdate/dishdate1.png"
import dishdate2 from "../assets/images/apps/dishdate/dishdate2.png"


export type AppData = {
    id: string;
    title: string;
    url: string;
    description1: string;
    description2: string;
    image1: string;
    image2: string;
    color: "dark" | "light";
};

export const apps: AppData[] = [
    {
        id: "avocadoro",
        title: "Avocadoro",
        url: "https://github.com/koleks92/Avocadoro",
        description1:
            "Avocadoro is a Pomodoro-style productivity app built with React, ReactNative, TypeScript, Electron, and Supabase. It helps you focus on your study or learning sessions, track breaks, and visualize your progress over time. ",
        description2: "Built a manual transfer feature that leverages Supabase Realtime to broadcast the active timer's exact state between devices at the click of a button. This allows users to explicitly hand off their session from mobile to desktop (or vice versa), using real-time database listeners to instantly catch and resume the session without losing momentum.",
        image1: avocadoro1,
        image2: avocadoro2,
        color: "light",
    },
    {
        id: "dishdate",
        title: "DishDate",
        url: "https://github.com/koleks92/DishDate",
        description1: "DishDate is a fun, interactive app where two users go through a set of dish cards, swiping left or right based on their preferences. The app then shows how many dishes they both liked, helping people bond over shared tastes in food.",
        description2: "Built with secure Google and Apple OAuth for seamless user onboarding, the app pairs a dynamic card-swiping engine with asynchronous Push Notifications to alert users the moment a game is finished. To optimize performance, the system uses relational database queries to instantly calculate shared food preferences, delivering instant match results while maintaining low query latency.",
        image1: dishdate1,
        image2: dishdate2,
        color: "dark",
    }
];
