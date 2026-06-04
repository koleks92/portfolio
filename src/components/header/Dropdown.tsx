type LinksType = {
    name: string;
    href: string;
};

const links: LinksType[] = [
    { name: "Hero", href: "#hero" },
    { name: "Apps", href: "#gallery" },
    { name: "App1", href: "#app1" },
    { name: "App2", href: "#app2" },
    { name: "App3", href: "#app3" },
    { name: "App4", href: "#app4" },
    { name: "Footer", href: "#footer" },
];

export default function Dropdown() {
    return (
        <div className="flex flex-row justify-evenly bg-dark-light p-2">
            {links.map((link) => (
                <a className="text-text-muted" key={link.name} href={link.href}>{link.name}</a>
            ))}
        </div>
    );
}
