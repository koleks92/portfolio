import type React from "react";
import Page from "../UI/Page";

type AppProps = {
    children: React.ReactNode;
    color: "dark" | "light";
};

export default function AppSection({ children, color }: AppProps) {
    return (
        <Page>
            <div
                className={`flex flex-1 flex-col justify-center items-center ${color === "dark" ? "bg-dark-mid text-text-muted" : "bg-light text-text-on-light"}`}
            >
                {children}
            </div>
        </Page>
    );
}
