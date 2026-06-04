import type React from "react";
import Dropdown from "./Dropdown";
import { useState } from "react";

type HeaderProps = {
    children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="fixed top-0 left-0 w-full z-50"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div id="header" className="bg-dark p-2 text-center">
                <h2 className="text-text-primary">{children}</h2>
            </div>
            <div
                className={`overflow-hidden transition-all duration-1000 ${open ? "max-h-40" : "max-h-0"}`}
            >
                <Dropdown />
            </div>
        </div>
    );
}
