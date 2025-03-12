import {
    ChevronDoubleDownIcon,
    ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";
import { SectionId } from "../../config/types";
import { formatSectionHeading } from "../../config/utils";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedDivInterface {
    sectionId: SectionId;
    classes: string;
    order: number;
    text: string;
    isMobile: boolean;
    handleSetVisibility: (id: SectionId) => void;
    visibleSection: string | null;
}

const AnimatedDiv: React.FC<AnimatedDivInterface> = ({
    sectionId,
    classes,
    order,
    text,
    isMobile,
    handleSetVisibility,
    visibleSection,
}) => {
    const heading = formatSectionHeading(sectionId);
    const classesString = `bg-white p-4 relative ${classes}`;
    const isVisible = visibleSection === sectionId;

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{
                y: !isMobile && isVisible && sectionId === "recently" ? -70 : 0,
            }}
            transition={{
                duration: 0.33,
                ease: "linear",
            }}
            className={classesString}
            style={isMobile ? { order } : undefined}>
            <div
                className={`${
                    isVisible ? "place-items-start" : "place-items-center"
                } grid-flow-col justify-center cursor-pointer flex`}
                onClick={() => {
                    handleSetVisibility(sectionId);
                }}>
                <h3 className='first-letter:uppercase'>{heading}</h3>
                {isVisible ? (
                    <ChevronDoubleUpIcon className='h-6 w-6 ml-2' />
                ) : (
                    <ChevronDoubleDownIcon className='h-6 w-6 ml-2 animate-pulse' />
                )}
            </div>

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.33, ease: "linear" }}
                        className='lg:absolute lg:left-0 lg:top-[40%] w-full bg-white p-4 items-center 2xl:p-8'>
                        <p dangerouslySetInnerHTML={{ __html: text }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default AnimatedDiv;
