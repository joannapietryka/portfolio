//import { CodeBracketIcon } from "@heroicons/react/24/outline";
// import Card from "../Card/Card";
import { motion } from "framer-motion";
import Shape from "../Shape/Shape";
import { useState } from "react";
import { COLORS } from "../../config/globals";

const Work: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <motion.section
            initial={{ background: COLORS.white }}
            whileInView={{ background: COLORS.blue }}
            transition={{ duration: 4 }}
            id='work'
            className='justify-strech'>
            <div className='grid-cols-7 grid-rows-7 gap-4 w-full p-3 grid-flow-row auto-rows-min relative'>
                <div className='col-span-4 row-span-4 bg-white rounded-md'>
                    <h3>Experience</h3>
                    <p></p>
                </div>
                <div className='col-span-2 row-span-7 col-start-5 bg-white rounded-md p-4'>
                    <h3>
                        Technologies
                        <br /> and Tools
                    </h3>
                    <ul className='uppercase'>
                        <li>HTML5</li>
                        <li>CSS3 / SASS / RWD</li>
                        <li>BOOTSTRAP / TAILWIND.CSS</li>
                        <li>JAVASCRIPT / ES6 / TYPESCRIPT</li>
                        <li>REACT.js / REDUX / REACT HOOKS</li>
                        <li>NEXT.JS</li>
                        <li>MOCHA & CHAI</li>
                        <li>GIT / REST API / DOCKER</li>
                        <li>WORDPRESS / DRUPAL</li>
                        <li>Figma / zeplin</li>
                        <li>Jira / Sharepoint</li>
                    </ul>
                    <div className='justify-self-end'>
                        {!isVisible ? (
                            <div
                                className='grid-cols-2 w-[120px] h-min cursor-pointer'
                                onClick={() => setIsVisible(!isVisible)}>
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
                        ) : (
                            <div className='bg-pink h-[120px] w-[120px]'>
                                <p className='text-white text-m'>
                                    React <br /> & Tailwind
                                </p>
                            </div>
                        )}
                        <p className='text-xs relative z-10'>
                            My heart goes to...
                        </p>
                    </div>
                </div>
                <div className='col-span-2 row-span-3 col-start-1 row-start-5 bg-light-pink rounded-md p-4'>
                    <p className='text-white text-[5vw] leading-none text-right'>
                        <span className='text-[3vw]'>I'm</span>
                        <br />
                        Frontend Developer
                    </p>
                </div>
                <div className='col-span-2 row-span-3 col-start-3 row-start-5 bg-white rounded-md p-4'>
                    <h3>Clients</h3>
                    <p>
                        While working at an international advertising agency, I
                        developed code for renowned brands such as Ferrero
                        Rocher, Raffaello, Cheetos, Vuse, United Rentals, BNP
                        Paribas, Mercedes-Benz, and Mazda.
                    </p>
                </div>
                <div className='row-span-7 col-start-7 row-start-1 align-middle'>
                    <h2
                        className='text-white text-[20vh] leading-none'
                        style={{
                            writingMode: "vertical-rl",
                        }}>
                        Work
                    </h2>
                </div>
            </div>
            {/* <div className='grid-cols-3 grid-rows-5 gap-4 justify-self-center p-4 w-full'>
              
                <div className='row-span-4 col-start-1 row-start-2 bg-white '>
                    <span className='text-white text-2xl'>Experience</span>
                    <CodeBracketIcon className='fill-white h-8 pl-2' />
                </div>
                <div className='row-span-4 col-start-2 row-start-2 bg-white'>
                    <span className='text-white text-2xl'>Technologies</span>
                    <CodeBracketIcon className='fill-white h-8 pl-2' />
                </div>
                <div className='row-span-4 col-start-3 row-start-1 bg-white'>
                    <span className='text-white text-2xl'>Education</span>
                    <CodeBracketIcon className='fill-white h-8 pl-2' />
                </div>
            </div> */}
        </motion.section>
    );
};

export default Work;
