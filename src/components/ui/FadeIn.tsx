import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FadeInDirection = "top" | "bottom" | "left" | "right";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    from?: FadeInDirection;
}

const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    from = "bottom",
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" });

    const variants = {
        bottom: { opacity: 0, y: 30 },
        top: { opacity: 0, y: -30 },
        left: { opacity: 0, x: -30 },
        right: { opacity: 0, x: 30 },
    };

    return (
        <motion.div
            ref={ref}
            initial={variants[from]}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay }}>
            {children}
        </motion.div>
    );
};

export default FadeIn;
