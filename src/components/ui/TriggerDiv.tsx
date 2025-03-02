import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { SectionId } from "../../config/types";
import { formatSectionHeading } from "../../config/utils";

interface TriggerDivInterface {
    sectionId: SectionId;
    classes: string;
    order: number;
    isMobile: boolean;
    handleSetVisibility: (id: SectionId) => void;
}

const TriggerDiv: React.FC<TriggerDivInterface> = ({
    sectionId,
    classes,
    order,
    isMobile,
    handleSetVisibility,
}) => {
    const heading = formatSectionHeading(sectionId);

    return (
        <div
            className={`bg-white p-4 ${classes} ${
                isMobile && `order-${order}`
            }`}>
            <div
                className='place-items-center grid-flow-col justify-center cursor-pointer'
                onClick={() => handleSetVisibility(sectionId)}>
                <h3 className='first-letter:uppercase'>{heading}</h3>
                <ChevronDoubleDownIcon className='h-6 w-6 ml-2 animate-pulse'></ChevronDoubleDownIcon>
            </div>
        </div>
    );
};

export default TriggerDiv;
