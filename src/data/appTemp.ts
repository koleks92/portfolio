type AppData = {
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
        image1: "../assets/images/apps/temp.png",
        image2: "../assets/images/apps/temp.png",
        color: "light",
    },
]