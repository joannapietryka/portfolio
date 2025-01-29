import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "../../config/globals";

const links = ["hello", "about", "work", "contact"];

const Header: React.FC = () => {
    const [showNav, setShowNav] = useState(false);

    const gridLength = links.length;

    const linksMap = links.map((link, index) => (
        <div className='grid justify-center cursor-pointer' key={index}>
            <Link
                activeClass='active'
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setShowNav(false)}>
                {link}
            </Link>
        </div>
    ));

    const navClass = `grid-rows-${gridLength} md:grid-rows-none md:grid-cols-${gridLength}`;

    const nav = (
        <>
            <nav
                className={`grid w-full items-center uppercase text-white text-6xl leading-[7rem] mt-10 md:text-black md:h-20 md:text-xs md:px-8 md:max-w-[80%] md:mt-0 justify-self-center ${navClass}`}>
                {linksMap}
            </nav>
        </>
    );
    return (
        <>
            <div className='grid md:hidden w-full relavite'>
                <motion.div
                    initial={{ backgroundColor: COLORS.orange }}
                    animate={{
                        backgroundColor: showNav ? COLORS.white : COLORS.orange,
                    }}
                    exit={{ backgroundColor: COLORS.orange }}
                    className='rounded-full h-[3rem] w-[3rem] top-4 right-4 absolute z-50'
                    onClick={() => setShowNav(!showNav)}></motion.div>
                <AnimatePresence>
                    {showNav && (
                        <motion.div
                            className='bg-orange absolute z-30'
                            initial={{
                                width: "3rem",
                                height: "3rem",
                                borderRadius: "50%",
                                top: "1rem",
                                right: "1rem",
                            }}
                            animate={{
                                width: "100vw",
                                height: "100vh",
                                borderRadius: "0%",
                                top: 0,
                                right: 0,
                            }}
                            exit={{
                                width: "3rem",
                                height: "3rem",
                                borderRadius: "50%",
                                top: "1rem",
                                right: "1rem",
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}>
                            {nav}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <header className='hidden md:grid bg-white z-[100] fixed w-full top-0 left-1/2 -translate-x-1/2'>
                <div className='w-full md:max-w-screen-2xl mx-auto'>{nav}</div>
            </header>
        </>
    );
};
export default Header;
