import Gallery from "../gallery/Gallery";
import Page from "../UI/Page";

import {
    AndroidOriginal,
    AppleOriginal,
    D3jsOriginal,
    DjangoPlain,
    DockerOriginal,
    ElectronOriginal,
    ExpoOriginal,
    FastapiOriginal,
    FigmaOriginal,
    FlaskOriginal,
    GithubOriginal,
    Html5Original,
    JavascriptOriginal,
    JestPlain,
    MochaOriginal,
    NestjsOriginal,
    NextjsOriginal,
    NodejsOriginal,
    NpmOriginal,
    OauthOriginal,
    PythonOriginal,
    RaspberrypiOriginal,
    ReactnativeOriginal,
    ReactOriginal,
    SentryOriginal,
    SqliteOriginal,
    SupabaseOriginal,
    TailwindcssOriginal,
    TypescriptOriginal,
    VisualstudioOriginal,
    Css3Original,
} from "devicons-react";

// Define the type for our tech stack array
type TechItem = {
    name: string;
    Icon: React.ElementType;
};

// Map friendly names to the imported icon components
const techStack: TechItem[] = [
    { name: "JavaScript", Icon: JavascriptOriginal },
    { name: "TypeScript", Icon: TypescriptOriginal },
    { name: "Python", Icon: PythonOriginal },
    { name: "React", Icon: ReactOriginal },
    { name: "Next.js", Icon: NextjsOriginal },
    { name: "Expo", Icon: ExpoOriginal },
    { name: "React Native", Icon: ReactnativeOriginal },
    { name: "Django", Icon: DjangoPlain },
    { name: "Flask", Icon: FlaskOriginal },
    { name: "FastAPI", Icon: FastapiOriginal },
    { name: "Node.js", Icon: NodejsOriginal },
    { name: "NestJS", Icon: NestjsOriginal },
    { name: "Supabase", Icon: SupabaseOriginal },
    { name: "SQLite", Icon: SqliteOriginal },
    { name: "HTML5", Icon: Html5Original },
    { name: "Tailwind CSS", Icon: TailwindcssOriginal },
    { name: "D3.js", Icon: D3jsOriginal },
    { name: "Jest", Icon: JestPlain },
    { name: "Mocha", Icon: MochaOriginal },
    { name: "Electron", Icon: ElectronOriginal },
    { name: "Docker", Icon: DockerOriginal },
    { name: "GitHub", Icon: GithubOriginal },
    { name: "npm", Icon: NpmOriginal },
    { name: "Figma", Icon: FigmaOriginal },
    { name: "Visual Studio", Icon: VisualstudioOriginal },
    { name: "Sentry", Icon: SentryOriginal },
    { name: "OAuth", Icon: OauthOriginal },
    { name: "Android", Icon: AndroidOriginal },
    { name: "Apple", Icon: AppleOriginal },
    { name: "Raspberry Pi", Icon: RaspberrypiOriginal },
    { name: "CSS3", Icon: Css3Original },
];

export default function Hero() {
    const galleryImages = techStack.map((tech) => ({
        name: tech.name,
        url: tech.Icon,
    }));

    return (
        <Page>
            <div className="flex min-h-screen w-full flex-col justify-evenly items-center bg-dark-mid text-text-muted gap-2">
                <div />
                <div>
                    <div className="text-xl font-medium">Foto</div>
                    <span className="text-lg tracking-wide text-text-primary">
                        Web & Mobile Developer
                    </span>
                </div>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center mt-6 mb-4 text-text-primary ">
                        Technologies & Tools
                    </h2>
                    <div className="w-full overflow-hidden">
                        <Gallery images={galleryImages} />
                    </div>
                </div>
            </div>
        </Page>
    );
}
