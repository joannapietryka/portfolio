import { ReactNode } from "react";
import { motion, useMotionValue } from "framer-motion";

import {
    AdjustmentsVerticalIcon,
    ArrowPathIcon,
    ArrowUpCircleIcon,
    AtSymbolIcon,
    ChatBubbleLeftRightIcon,
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    HashtagIcon,
    HandThumbUpIcon,
    WifiIcon,
    PowerIcon,
    LightBulbIcon,
    SpeakerWaveIcon,
    TvIcon,
    UserIcon,
    PaperClipIcon,
    NumberedListIcon,
    LinkIcon,
    CalculatorIcon,
    EnvelopeOpenIcon,
    ChartBarIcon,
    AcademicCapIcon,
    BellAlertIcon,
    ArrowTurnDownLeftIcon,
} from "@heroicons/react/24/outline";

const icons = [
    AdjustmentsVerticalIcon,
    ArrowPathIcon,
    ArrowUpCircleIcon,
    AtSymbolIcon,
    ChatBubbleLeftRightIcon,
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    HashtagIcon,
    HandThumbUpIcon,
    WifiIcon,
    PowerIcon,
    LightBulbIcon,
    SpeakerWaveIcon,
    TvIcon,
    UserIcon,
    PaperClipIcon,
    NumberedListIcon,
    LinkIcon,
    CalculatorIcon,
    EnvelopeOpenIcon,
    ChartBarIcon,
    AcademicCapIcon,
    BellAlertIcon,
    ArrowTurnDownLeftIcon,
];

const IconWithHoverEffect: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const offsetX = (mouseX - rect.width / 2) / 4;
        const offsetY = (mouseY - rect.height / 2) / 4;

        x.set(offsetX);
        y.set(offsetY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // const handleTouchStart = () => handleMouseMove();
    // const handleTouchEnd = () => handleMouseLeave();

    return (
        <motion.div
            style={{ x, y }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            // onTouchStart={handleTouchStart}
            // onTouchEnd={handleTouchEnd}
            className='p-4'>
            {children}
        </motion.div>
    );
};

const Icons: React.FC = () => {
    return (
        <>
            {icons.map((IconComponent, index) => (
                <IconWithHoverEffect key={index}>
                    <IconComponent className='h-8 w-8 text-white' />
                </IconWithHoverEffect>
            ))}
        </>
    );
};

export default Icons;
