import { motion } from "framer-motion";
import Shape from "../ui/Shape/Shape";
import { useState } from "react";
import { COLORS } from "../../config/globals";
import useMobile from "../../hooks/useMobile";
import FadeIn from "../ui/FadeIn";

const Work: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useMobile();

    return (
        <motion.section
            initial={{ background: COLORS.white }}
            whileInView={{ background: COLORS.blue }}
            transition={{ duration: 4 }}
            id='work'
            className='justify-strech'>
            <div className='lg:grid-cols-7 lg:grid-rows-7 gap-4 w-full p-3 grid-flow-row lg:auto-rows-min relative'>
                <div className='lg:col-span-4 lg:row-span-4'>
                    <FadeIn>
                        <div className='bg-white lg:grid-flow-col'>
                            <div className='p-4'>
                                <h3>Experience</h3>
                                <p className='text-xl mt-4'>
                                    I've spent most of my career working at an
                                    advertising agency, where constantly
                                    changing projects and client requests helped
                                    me become adaptable and great at
                                    problem-solving. <br />
                                    Over thh years, I've worked on both small
                                    and big projects for well-known brands.
                                    Since every project had different needs, I
                                    got to work with a variety of frontend
                                    technologies. I've used OOP, React.js, and
                                    Vue.js, but React.js (especially with
                                    Tailwind CSS) has always been my favorite.
                                </p>
                            </div>
                            <div className='lg:grid-flow-col justify-end'>
                                <FadeIn from='right'>
                                    <div className='bg-light-blue h-full w-[20px]'></div>
                                </FadeIn>
                                <FadeIn from='right' delay={0.3}>
                                    <div className='bg-pink h-full w-[30px]'></div>
                                </FadeIn>
                                <FadeIn from='right' delay={0.6}>
                                    <div className='bg-light-orange h-full w-[40px]'></div>
                                </FadeIn>
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <div className='lg:col-span-2 lg:row-span-7 lg:col-start-5 '>
                    <FadeIn>
                        <div className='bg-white p-4'>
                            <h3>
                                Technologies
                                <br /> and Tools
                            </h3>
                            <ul className='uppercase mt-4'>
                                <li>HTML5</li>
                                <li>CSS3 / SASS / RWD</li>
                                <li>BOOTSTRAP / TAILWIND.CSS</li>
                                <li>JAVASCRIPT / ES6 / TYPESCRIPT</li>
                                <li>REACT.js / REDUX TOOLKIT / REACT HOOKS</li>
                                <li>NEXT.JS</li>
                                <li>MOCHA & CHAI</li>
                                <li>GIT / REST API / DOCKER</li>
                                <li>WORDPRESS / DRUPAL</li>
                                <li>Figma / zeplin</li>
                                <li>Jira / Sharepoint</li>
                            </ul>
                            <div className='justify-self-end'>
                                {!isVisible ? (
                                    <FadeIn>
                                        <div
                                            className='grid-cols-2 w-[120px] h-[120px] cursor-pointer'
                                            onClick={() =>
                                                setIsVisible(!isVisible)
                                            }>
                                            <Shape
                                                color='pink'
                                                position='bottom'
                                                text='click'
                                                size='60px'
                                                flipped={true}
                                            />
                                            <Shape
                                                color='pink'
                                                position='bottom'
                                                text='me'
                                                size='60px'
                                            />
                                        </div>
                                    </FadeIn>
                                ) : (
                                    <motion.div
                                        initial={{ scaleY: 0, opacity: 0 }}
                                        animate={{
                                            scaleY: 1,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}
                                        className='bg-pink h-[120px] w-[120px]'>
                                        <p className='text-white text-m self-end'>
                                            React <br /> & Tailwind
                                        </p>
                                    </motion.div>
                                )}
                                <p className='text-xs relative z-10'>
                                    My heart goes to...
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <div className='lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-5 '>
                    <FadeIn>
                        <div className='bg-light-pink p-4'>
                            <p className='text-white text-[5vw] leading-none text-right self-end xl:text-[4vw]'>
                                <span className='text-[3vw] xl:text-[2vw]'>
                                    I'm
                                </span>
                                <br />
                                Frontend Developer
                            </p>
                        </div>
                    </FadeIn>
                </div>
                <div className='lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-5'>
                    <FadeIn delay={0.3}>
                        <div className='bg-white p-4'>
                            <h3>Clients</h3>
                            <p className='text-xl mt-4'>
                                While working at an international advertising
                                agency, I developed code for renowned brands
                                such as Ferrero Rocher, Raffaello, Cheetos,
                                Vuse, United Rentals, BNP Paribas,
                                Mercedes-Benz, and Mazda.
                            </p>
                        </div>
                    </FadeIn>
                </div>
                <div className='lg:row-span-7 lg:col-start-7 row-start-1 align-middle'>
                    <FadeIn from='right'>
                        <h2
                            className='text-white text-[16vh] lg:text-[20vh] leading-none'
                            style={{
                                ...(isMobile
                                    ? {}
                                    : { writingMode: "vertical-rl" }),
                            }}>
                            Work
                        </h2>
                    </FadeIn>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
