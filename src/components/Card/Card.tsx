import { CodeBracketIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

interface CardProps {
    bg: string;
    text: string;
}
const Card: React.FC<CardProps> = ({ bg, text }) => {
    return (
        <motion.div className='group relative overflow-hidden content-end rounded-md w-full h-full cursor-pointer'>
            <div
                className={`${bg} bg-cover bg-center bg-no-repeat absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110`}>
                {" "}
            </div>
            <div className='grid-flow-col justify-start items-end px-6 py-4 absolute inset-0 z-10'>
                <span className='text-white text-2xl'>{text}</span>
                <CodeBracketIcon className='fill-white h-8 pl-2' />
            </div>
        </motion.div>
    );
};

export default Card;
