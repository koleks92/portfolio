import React from "react";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";

type Foto = {
    name: string;
    url: React.ElementType;
};

type GalleryProps = {
    images: Foto[];
};

type RenderIconProps = {
    image: Foto;
    size: number;
    index: number;
    rowId: string;
};


const RenderIcon = ({ image, size, index, rowId }: RenderIconProps) => {
    const IconComponent = image.url;

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

export default function Gallery({ images }: GalleryProps) {
    const half = Math.ceil(images.length / 2);
    const firstRow = images.slice(0, half);
    const secondRow = images.slice(half);

    const speed: number = 12;
    const gap: number = 32;
    const iconSize: number = 44; 

    return (
        <div className="w-full overflow-hidden flex flex-col gap-6 py-4 fade-edges">
            {/* First Row (Left to Right) */}
            <InfiniteSlider
                gap={gap}
                speed={speed}
                className="overflow-visible"
            >
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
