import Shape from "../ui/Shape/Shape";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../../assets/photos/profile.png";
import Icons from "../ui/Icons";
import { useState } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { COLORS } from "../../config/globals";

const About: React.FC = () => {
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
            <div className='w-full p-3 relative md:grid-cols-3 md:grid-rows-11 gap-4 md:grid-flow-row md:auto-rows-min'>
                <div className='text-center md:col-span-3 md:row-span-2'>
                    <motion.h2 className='text-[16vw] text-white'>
                        about me
                    </motion.h2>
                </div>
                <div className='md:row-span-4 md:row-start-3 bg-blue rounded-md'>
                    <div className='grid-cols-6 grid-rows-4 place-items-center w-full h-full p-3'>
                        <Icons />
                    </div>
                </div>
                <div className='md:row-span-5 md:row-start-3 bg-white rounded-md place-items-center relative rounded-tr-[75px]'>
                    <div className='grid-flow-col h-full'>
                        <p className='text-xl p-5 shape-outside z-10'>
                            Thanks for finding a moment to read a few words
                            about me. As a professional, I created this website
                            mainly to present my frontend skills but also my
                            personal story and areas of interest.
                        </p>
                        <div className='grid-cols-1 w-[150px] h-min relative top-0 right-0 z-0'>
                            <Shape
                                color='light-pink'
                                position='bottom'
                                flipped={true}
                                size='150px'
                                //text='some'
                            />
                        </div>
                    </div>
                </div>
                <div className='md:row-span-2 md:row-start-3 bg-white rounded-md'>
                    <div
                        className='place-items-center grid-flow-col justify-center cursor-pointer'
                        onClick={() => handleSetVisibility("softSkills")}>
                        <h2>Soft skills</h2>
                        <ChevronDoubleDownIcon className='h-8 w-8 mt-2 ml-2 animate-pulse'></ChevronDoubleDownIcon>
                    </div>
                </div>
                <div className='md:row-span-2 md:col-start-1 md:row-start-7 bg-white rounded-md z-30'>
                    <div
                        className='place-items-center grid-flow-col justify-center cursor-pointer'
                        onClick={() => handleSetVisibility("beginning")}>
                        <h2>Beginning</h2>

                        <ChevronDoubleDownIcon className='h-8 w-8 mt-2 ml-2 animate-pulse'></ChevronDoubleDownIcon>
                    </div>
                    <p>Why I'm here</p>
                </div>
                <div className='md:row-span-4 md:col-start-2 md:row-start-8 bg-white rounded-md place-items-center'>
                    <div
                        className='place-items-center grid-flow-col justify-center cursor-pointer'
                        onClick={() => handleSetVisibility("recently")}>
                        <h2>Recently </h2>
                        <ChevronDoubleDownIcon className='h-8 w-8 mt-2 ml-2 animate-pulse'></ChevronDoubleDownIcon>
                    </div>
                </div>
                <div className='bg-light-blue rounded-md items-end md:row-span-7 md:col-start-3 md:row-start-5'>
                    <img
                        className='cover'
                        src={profile}
                        alt='Joanna Pietryka picture'
                    />
                </div>
                <div className='bg-shapes bg-cover rounded-md place-items-center md:row-span-3 md:row-start-9'></div>

                <div className='gap-4 p-3 grid-flow-row auto-rows-min absolute w-full h-full top-0 left-0 z-20 pointer-events-none md:grid-cols-3 md:grid-rows-11'>
                    <div className='row-span-4 col-start-1 row-start-8'>
                        <AnimatePresence initial={false}>
                            {visibleSection === "beginning" && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "100%" }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                    className='bg-white rounded-md p-4 items-center'>
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
                    <div className='md:row-span-4 md:col-start-2 md:row-start-8'>
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
                                    className='bg-white rounded-md p-4 items-center'>
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
                    <div className='md:row-span-9 md:col-start-3 md:row-start-3'>
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
