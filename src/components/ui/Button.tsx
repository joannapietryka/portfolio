import { Link } from "react-scroll";
import Shape from "./Shape/Shape";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import useMobile from "../../hooks/useMobile";

interface ButtonProps {
    link?: string;
    text: string;
    type?: "submit" | "button" | "reset";
    disabled?: boolean;
    align?: "justify-end" | "justify-start" | "justify-center";
}

const Button: React.FC<ButtonProps> = ({
    link,
    text,
    type,
    disabled,
    align,
}) => {
    const isMobile = useMobile();
    const buttonContent = (
        <>
            <Shape
                color='orange'
                position='right'
                size={isMobile ? "60px" : "40px"}
            />
            <span className='grid self-center p-2 z-10 whitespace-nowrap'>
                {text}
            </span>
            <ChevronRightIcon className='pr-2 h-6 lg:h-4 relative z-10 translate-x-[-5px] transform group-hover:translate-x-0 transition-all duration-500 ease-in-out' />
        </>
    );

    const buttonClass = `group grid grid-flow-col relative items-center rounded-full text-lg min-w-[240px] lg:min-w-[140px] lg:min-w-auto lg:text-xs uppercase shadow after:content-[''] after:block after:absolute after:top-0 after:left-0 after:rounded-full after:w-[60px] lg:after:w-[40px] after:h-[60px] lg:after:h-[40px] after:bg-orange
    after:transition-all after:duration-500 after:ease-in-out 
        ${
            disabled
                ? "cursor-not-allowed hover:opacity-75"
                : "cursor-pointer hover:after:w-full"
        }`;

    return (
        <div className={`grid ${align ? align : ""}`}>
            {link ? (
                <Link to={link} spy={true} smooth={true} duration={500}>
                    <button className={buttonClass}>{buttonContent}</button>
                </Link>
            ) : (
                <button className={buttonClass} type={type} disabled={disabled}>
                    {buttonContent}
                </button>
            )}
        </div>
    );
};

export default Button;
