import { motion, AnimatePresence } from "framer-motion";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { SectionId } from "../../config/types";
import { formatSectionHeading } from "../../config/utils";

interface AnimatedDivInterface {
    visibleSection: SectionId;
    sectionId: SectionId;
    text: string;
    classes: string;
}

const AnimatedDiv: React.FC<AnimatedDivInterface> = ({
    visibleSection,
    sectionId,
    text,
    classes,
}) => {
    const heading = formatSectionHeading(sectionId);
    return (
        <div className={classes}>
            <AnimatePresence initial={false}>
                {visibleSection === sectionId && (
                    <motion.div
                        initial={{
                            visibility: "hidden",
                            opacity: 0,
                        }}
                        animate={{
                            visibility: "visible",
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.33,
                            ease: "linear",
                        }}
                        exit={{
                            visibility: "hidden",
                            opacity: 0,
                        }}
                        className='bg-white p-4 items-center'>
                        <div className='place-items-center grid-flow-col justify-center cursor-pointer'>
                            <h3 className='first-letter:uppercase'>
                                {heading}
                            </h3>
                            <ChevronDoubleUpIcon className='h-6 w-6 ml-2 animate-pulse'></ChevronDoubleUpIcon>
                        </div>
                        <p>{text}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AnimatedDiv;
