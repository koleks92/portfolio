import { InfiniteSlider } from "../motion-primitives/infinite-slider";

type Foto = {
    name: string;
    url: string;
};

type GalleryProps = {
    images: Foto[];
};

InfiniteSlider;

export default function Gallery({ images }: GalleryProps) {
    return (
            <div className="flex flex-1 flex-row justify-center items-center w-full overflow-hidden">
                <InfiniteSlider gap={0} speed={33} speedOnHover={1}>
                    {[...images, ...images].map((image, i) => (
                        <img
                            key={i}
                            src={image.url}
                            alt={image.name}
                            className="w-100 flex-shrink-0 object-cover hover:scale-110 transition-transform duration-300"
                        />
                    ))}
                </InfiniteSlider>
            </div>
    );
}
