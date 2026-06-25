import type { AppData } from "../../data/apps";

type AppProps = {
    data: AppData;
};
export default function AppSection({ data }: AppProps) {
    return (
        <div
            className={`flex h-screen flex-col justify-center overflow-hidden ${
                data.color === "dark"
                    ? "bg-dark-mid text-text-muted"
                    : "bg-light text-text-on-light"
            }`}
        >
            {/* Title */}
            <div className="flex flex-[1] min-h-0 justify-center items-center">
                <h2 data-aos="zoom-in">{data.title}</h2>
            </div>

            {/* Row 1 */}
            <div className="flex flex-[3] min-h-0 flex-row pl-30 pr-10 justify-evenly items-center">
                <div
                    className={`flex-1 min-w-0 p-5 m-5 rounded-lg ${
                        data.color === "dark"
                            ? "bg-light text-text-on-light"
                            : "bg-dark-mid text-text-muted"
                    }`}
                    data-aos="fade-right"
                >
                    {data.description1}
                </div>
                <div
                    className="flex-1 min-w-0 h-full min-h-0 overflow-hidden"
                    data-aos="fade-left"
                >
                    <img
                        src={data.image1}
                        alt={data.title}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-[3] min-h-0 w-full flex-row pl-10 pr-30 justify-evenly items-center">
                <div
                    className="flex-1 min-w-0 h-full min-h-0 overflow-hidden"
                    data-aos="fade-right"
                >
                    <img
                        src={data.image2}
                        alt={data.title}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div
                    className={`flex-1 min-w-0 p-5 rounded-xl ${
                        data.color === "dark"
                            ? "bg-light text-text-on-light"
                            : "bg-dark-mid text-text-muted"
                    }`}
                    data-aos="fade-left"
                >
                    {data.description2}
                </div>
            </div>
        </div>
    );
}
