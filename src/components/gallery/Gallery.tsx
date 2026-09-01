import React from "react";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";

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

type Foto = {
  name: string;
  icon: React.ElementType;
};

type RenderIconProps = {
  image: Foto;
  size: number;
  index: number;
  rowId: string;
};

// Define the type for our tech stack array
type TechItem = {
  name: string;
  icon: React.ElementType;
};

// Map friendly names to the imported icon components
const techStack: TechItem[] = [
  { name: "JavaScript", icon: JavascriptOriginal },
  { name: "TypeScript", icon: TypescriptOriginal },
  { name: "Python", icon: PythonOriginal },
  { name: "React", icon: ReactOriginal },
  { name: "Next.js", icon: NextjsOriginal },
  { name: "Expo", icon: ExpoOriginal },
  { name: "React Native", icon: ReactnativeOriginal },
  { name: "Django", icon: DjangoPlain },
  { name: "Flask", icon: FlaskOriginal },
  { name: "FastAPI", icon: FastapiOriginal },
  { name: "Node.js", icon: NodejsOriginal },
  { name: "NestJS", icon: NestjsOriginal },
  { name: "Supabase", icon: SupabaseOriginal },
  { name: "SQLite", icon: SqliteOriginal },
  { name: "HTML5", icon: Html5Original },
  { name: "Tailwind CSS", icon: TailwindcssOriginal },
  { name: "D3.js", icon: D3jsOriginal },
  { name: "Jest", icon: JestPlain },
  { name: "Mocha", icon: MochaOriginal },
  { name: "Electron", icon: ElectronOriginal },
  { name: "Docker", icon: DockerOriginal },
  { name: "GitHub", icon: GithubOriginal },
  { name: "npm", icon: NpmOriginal },
  { name: "Figma", icon: FigmaOriginal },
  { name: "Visual Studio", icon: VisualstudioOriginal },
  { name: "Sentry", icon: SentryOriginal },
  { name: "OAuth", icon: OauthOriginal },
  { name: "Android", icon: AndroidOriginal },
  { name: "Apple", icon: AppleOriginal },
  { name: "Raspberry Pi", icon: RaspberrypiOriginal },
  { name: "CSS3", icon: Css3Original },
];

const RenderIcon = ({ image, size, index, rowId }: RenderIconProps) => {
  const IconComponent = image.icon;

  return (
    <div
      key={`${rowId}-${index}`}
      title={image.name}
      className="flex-shrink-0 p-3 bg-[#f5f3ff]/90 backdrop-blur-sm rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center"
    >
      <IconComponent size={size} />
    </div>
  );
};

export default function Gallery() {
  const half = Math.ceil(techStack.length / 2);
  const firstRow = techStack.slice(0, half);
  const secondRow = techStack.slice(half);

  const speed: number = 12;
  const gap: number = 32;
  const iconSize: number = 44;

  return (
    <div className="w-full overflow-hidden flex flex-col gap-6 py-4 fade-edges">
      {/* First Row (Left to Right) */}
      <InfiniteSlider gap={gap} speed={speed} className="overflow-visible">
        {[...firstRow, ...firstRow].map((image, i) => (
          <RenderIcon
            key={`row1-${i}`}
            image={image}
            size={iconSize}
            index={i}
            rowId="row1"
          />
        ))}
      </InfiniteSlider>

      {/* Second Row (Right to Left) */}
      <InfiniteSlider
        gap={gap}
        speed={speed}
        reverse
        className="overflow-visible"
      >
        {[...secondRow, ...secondRow].map((image, i) => (
          <RenderIcon
            key={`row2-${i}`}
            image={image}
            size={iconSize}
            index={i}
            rowId="row2"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
