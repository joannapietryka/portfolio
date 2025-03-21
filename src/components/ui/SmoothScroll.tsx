import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll: React.FC = () => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return null;
};

export default SmoothScroll;
