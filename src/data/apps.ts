import temp from "../assets/images/apps/temp.png"

export type AppData = {
    id: string;
    title: string;
    description1: string;
    description2: string;
    image1: string;
    image2: string;
    color: "dark" | "light";
};

export const apps: AppData[] = [
        {
        id: "app1",
        title: "App 1",
        description1: "Some description about app 1",
        description2: "Some description about app 2",
        image1: temp,
        image2: temp,
        color: "light",
    },
    {
        id: "app2",
        title: "App 2",
        description1: "Some description about app 1",
        description2: "Some description about app 2",
        image1: temp,
        image2: temp,
        color: "dark",
    },
    {
        id: "app3",
        title: "App 3",
        description1: "Some description about app 1",
        description2: "Some description about app 2",
        image1: temp,
        image2: temp,
        color: "light",
    },
    {
        id: "app4",
        title: "App 4",
        description1: "Some description about app 1",
        description2: "Some description about app 2",
        image1: temp,
        image2: temp,
        color: "dark",
    },
    {
        id: "app5",
        title: "App 5",
        description1: "Some description about app 1",
        description2: "Some description about app 2",
        image1: temp,
        image2: temp,
        color: "light",
    },
]