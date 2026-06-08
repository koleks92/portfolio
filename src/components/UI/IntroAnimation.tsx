import { useEffect } from "react";

export default function IntroAnimation({ split, onComplete }: { 
    split: boolean;
    onComplete: () => void 
}) {
    useEffect(() => {
        const timer = setTimeout(onComplete, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
            split ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
            <div className="flex text-white font-mono font-bold text-[120px] leading-none">
                <span className={`transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    split ? '-translate-x-[100vw]' : ''
                }`}>&lt;</span>
                <span className={`transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    split ? 'translate-x-[100vw]' : ''
                }`}>/&gt;</span>
            </div>
        </div>
    );
}