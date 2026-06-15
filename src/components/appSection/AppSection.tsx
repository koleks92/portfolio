import Page from "../UI/Page";
import type { AppData } from "../../data/apps";

type AppProps = {
    data: AppData;
};

export default function AppSection({ data }: AppProps) {
    return (
        <Page>
            <div
                className={`flex flex-1 flex-col justify-center items-center ${data.color === "dark" ? "bg-dark-mid text-text-muted" : "bg-light text-text-on-light"}`}
            >
                <div className="flex flex-1 border justify-center items-center">
                    <h2 data-aos="zoom-in">{data.title}</h2>
                </div>
                <div className="flex flex-2 w-full flex-row pl-20 pr-10 border justify-evenly items-center">
                    <div data-aos="fade-right">Description</div>
                    <div data-aos="fade-left">Image</div>
                </div>
                <div className="flex flex-2 w-full flex-row pl-10 pr-20 border justify-evenly items-center">
                    <div data-aos="fade-right">Image</div>
                    <div data-aos="fade-left">Description</div>
                </div>
            </div>
        </Page>
    );
}
