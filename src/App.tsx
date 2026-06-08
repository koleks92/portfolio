import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

import { links } from "./components/header/Dropdown";
import AppSection from "./components/appSection/AppSection";
import { useState } from "react";
import IntroAnimation from "./components/UI/IntroAnimation";

// Get id from links in Dropdown.tsx
const getId = (name: string) =>
    links.find((l) => l.name === name)?.href.replace("#", "");

function App() {
    const [split, setSplit] = useState(false);

    return (
        <>
            <IntroAnimation split={split} onComplete={() => setSplit(true)} />
            <div
                className={`min-h-screen flex flex-col transition-opacity duration-700 ${
                    split ? "opacity-100" : "opacity-0"
                }`}
            >
                <Header>Jan Sebastian Konieczek</Header>
                <main className="flex-1">
                    <div id={getId("Hero")}>
                        <Hero />
                    </div>
                    <div id={getId("App1")}>
                        <AppSection color="light">App1</AppSection>
                    </div>
                    <div id={getId("App2")}>
                        <AppSection color="dark">App2</AppSection>
                    </div>
                    <div id={getId("App3")}>
                        <AppSection color="light">App3</AppSection>
                    </div>
                    <div id={getId("App4")}>
                        <AppSection color="dark">App4</AppSection>
                    </div>
                    <section id="footer">Footer</section>
                </main>
            </div>
        </>
    );
}

export default App;
