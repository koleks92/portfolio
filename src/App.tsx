import Header from "./components/header/Header";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header>Jan Sebastian Konieczek</Header>
            <main className="flex-1">
                <section id="hero">Hero</section>
                <section id="gallery">Gallery</section>
                <section id="app1">App 1</section>
                <section id="app2">App 2</section>
                <section id="app3">App 3</section>
                <section id="app4">App 4</section>
                <section id="footer">Footer</section>
            </main>
        </div>
    );
}

export default App;
