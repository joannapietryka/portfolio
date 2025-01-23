import "./Shape.scss";
import { useRef } from "react";
import { motion } from "framer-motion";

interface ShapeProps {
    color:
        | "light-blue"
        | "blue"
        | "light-orange"
        | "orange"
        | "light-pink"
        | "pink";
    position: "top" | "bottom" | "left" | "right";
    size?: string;
    text?: string;
    sectionColor?: string;
    imgString?: string;
    flipped?: boolean;
    zIndex?: number;
}

const Shape: React.FC<ShapeProps> = ({
    color,
    position,
    size,
    text,
    sectionColor,
    imgString,
    flipped,
    zIndex,
}) => {
    const ref = useRef(null);
    const bg = imgString ? `bg-${imgString}` : "";

    // const x = useSpring(0, { stiffness: 100, damping: 20, mass: 2 });

    return (
        <motion.div
            ref={ref}
            className={`shape-container aspect-square background-${color} position-${position} ${
                flipped ? "fliped" : ""
            } ${zIndex ? `z-${zIndex}` : ""} `}
            style={
                {
                    // transform: `translateX(${x.get()}px)`,
                    "--shape-dim": size,
                    "--inherit-bg": sectionColor,
                } as React.CSSProperties
            }>
            <div
                className={`shape-round justify-center content-center ${
                    imgString ? `${bg} bg-cover` : ""
                }`}>
                <p
                    className={`text-white ${
                        flipped ? "fliped" : ""
                    } hover:cursor-pointer`}>
                    {text}
                </p>
            </div>
            <div className='shape-curved'></div>
        </motion.div>
    );
};

export default Shape;
