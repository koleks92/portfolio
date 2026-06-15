import { apps } from "../../data/apps";


export default function Dropdown() {
    return (
        <div className="flex flex-row justify-evenly bg-dark-light p-2">
            <a className="text-text-muted" key="hero" href="#hero">
                Hero
            </a>

            {apps.map((app) => (
                <a className="text-text-muted" key={app.title} href={"#" + app.id}>
                    {app.title}
                </a>
            ))}
                        <a className="text-text-muted" key="footer" href="#footer">
                Footer
            </a>
        </div>
    );
}
