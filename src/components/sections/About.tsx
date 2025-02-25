import Shape from "../ui/Shape/Shape";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../../assets/photos/profile.png";
import Icons from "../ui/Icons";
import { useState } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { COLORS } from "../../config/globals";
import useMobile from "../../hooks/useMobile";

const About: React.FC = () => {
    const isMobile = useMobile();

    type SectionId = "beginning" | "recently" | "softSkills" | null;

    const [visibleSection, setVisibleSection] = useState<SectionId>(null);

    const handleSetVisibility = (id: SectionId) => {
        setVisibleSection((prev) => (prev === id ? null : id));
    };

    return (
        <motion.section
            initial={{ background: COLORS.white }}
            whileInView={{ background: COLORS.pink }}
            transition={{ duration: 4, delay: 2 }}
            id='about'
            className='justify-strech'>
            <div className='w-full p-3 relative lg:grid-cols-3 lg:grid-rows-11 gap-4 lg:grid-flow-row lg:auto-rows-min'>
                <div className='text-center lg:col-span-3 lg:row-span-2'>
                    <motion.h2 className='text-[16vw] text-white'>
                        about me
                    </motion.h2>
                </div>
                <div
                    className={`lg:row-span-4 lg:row-start-3 bg-blue ${
                        isMobile && "order-3"
                    }`}>
                    <div className='grid-cols-6 grid-rows-3 lg:grid-rows-4 place-items-center w-full h-full p-3'>
                        <Icons />
                    </div>
                </div>
                <motion.div
                    initial={{ scaleY: 1, opacity: 1 }}
                    animate={{
                        scaleY: visibleSection === "recently" ? 0 : 1,
                        opacity: visibleSection === "recently" ? 0 : 1,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className={`lg:row-span-5 lg:row-start-4 bg-white place-items-center relative rounded-tr-[75px] overflow-hidden ${
                        isMobile && "order-1"
                    }`}>
                    <div className='grid-flow-col h-full'>
                        <div className='p-5 z-10 items-end'>
                            <h3>Welcome!</h3>
                            <p className='text-xl self-end w-[140%]'>
                                Thanks for finding a moment to read a few words
                                about me. As a professional, I created this
                                website mainly to present my frontend skills but
                                also my personal story and areas of interest.
                            </p>
                        </div>
                        <div
                            className={`grid-cols-1 h-min relative top-0 right-0 z-0 shape-outside-circle ${
                                isMobile ? "w-[100px]" : "w-[150px]"
                            }`}>
                            <Shape
                                color='light-pink'
                                position='bottom'
                                flipped={true}
                                size={isMobile ? "100px" : "150px"}
                            />
                        </div>
                    </div>
                </motion.div>
                <div
                    className={`lg:row-span-2 lg:row-start-3 bg-white p-4 ${
                        isMobile && "order-5"
                    }`}>
                    <div
                        className='place-items-center grid-flow-col justify-center cursor-pointer'
                        onClick={() => handleSetVisibility("softSkills")}>
                        <h3>Soft skills</h3>
                        <ChevronDoubleDownIcon className='h-6 w-6 ml-2 animate-pulse'></ChevronDoubleDownIcon>
                    </div>
                </div>
                <div
                    className={`lg:row-span-2 lg:col-start-1 lg:row-start-7 bg-white z-30 justify-center p-4 ${
                        isMobile && "order-2"
                    }`}>
                    <div
                        className='place-items-center grid-flow-col cursor-pointer'
                        onClick={() => handleSetVisibility("beginning")}>
                        <h3>Beginning</h3>

                        <ChevronDoubleDownIcon className='h-6 w-6 ml-2 animate-pulse'></ChevronDoubleDownIcon>
                    </div>
                    <p>Why I'm here</p>
                </div>
                <div
                    className={`lg:row-span-2 lg:col-start-2 lg:row-start-9 bg-white place-items-center p-4 ${
                        isMobile && "order-4"
                    }`}>
                    <div
                        className='place-items-center grid-flow-col cursor-pointer'
                        onClick={() => handleSetVisibility("recently")}>
                        <h3>Recently </h3>
                        <ChevronDoubleDownIcon className='h-6 w-6 ml-2 animate-pulse'></ChevronDoubleDownIcon>
                    </div>
                </div>
                <div
                    className={`bg-light-blue items-end lg:row-span-7 lg:col-start-3 lg:row-start-5 ${
                        isMobile && "order-6"
                    }`}>
                    <img
                        className='cover'
                        src={profile}
                        alt='Joanna Pietryka picture'
                    />
                </div>
                <div className='bg-shapes bg-cover place-items-center lg:row-span-3 lg:row-start-9'></div>

                <div className='gap-4 p-3 grid-flow-row auto-rows-min absolute w-full h-full top-0 left-0 z-20 pointer-events-none lg:grid-cols-3 lg:grid-rows-11'>
                    <div className='row-span-4 col-start-1 row-start-8'>
                        <AnimatePresence initial={false}>
                            {visibleSection === "beginning" && (
                                <motion.div
                                    initial={{ scaleY: 0, opacity: 0 }}
                                    animate={{ scaleY: 1, opacity: 1 }}
                                    exit={{ scaleY: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                    className='bg-white p-4 items-center'>
                                    <p>
                                        I began working in IT in 2015, but at
                                        first, I wasn't really into coding.
                                        Fortunately (and a bit unexpectedly), I
                                        was given a chance to dive into frontend
                                        development. Quickly, I realized how
                                        satisfying coding is—making designs come
                                        to life and seeing things happen with a
                                        click. Well, I think "coding people" can
                                        understand that feeling. I decided to
                                        pursue this path and spent the next few
                                        years taking courses and following
                                        tutorials. (To be honest, I still
                                        do—yes, there's always something new
                                        coming up in frontend development.)
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className='lg:row-span-4 lg:col-start-2 lg:row-start-8'>
                        <AnimatePresence initial={false}>
                            {visibleSection === "recently" && (
                                <motion.div
                                    initial={{
                                        height: 0,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        height: "auto",
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className='bg-white p-4 items-center'>
                                    <p>
                                        As for many, my life changed during the
                                        Covid era. I started working remotely,
                                        and to avoid spending long and lonely
                                        weeks in my studio flat in Krakow, I
                                        decided to explore the Canary Islands. I
                                        found more sun there, but also... my
                                        French partner. Long story short, I
                                        recently moved to Bordeaux, where I am
                                        intensively learning French, looking for
                                        new job opportunities, and making new
                                        friends.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className='lg:row-span-9 lg:col-start-3 lg:row-start-3'>
                        <AnimatePresence initial={false}>
                            {visibleSection === "softSkills" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}>
                                    <p>
                                        As i've studied journalism, Public
                                        Relations and marketing and I've started
                                        my professional career in e-commerce and
                                        marketing departments so user experience
                                        on the page and UI were always really
                                        important to me. I have also good sense
                                        of style but i don't like when pages are
                                        to focus on the design as it becomes not
                                        intuitive enough.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
