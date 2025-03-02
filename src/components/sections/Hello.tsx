import Shape from "../ui/Shape/Shape";
import Button from "../ui/Button";
//import profile from "../../assets/photos/profile.png";
// import laptop from "../../assets/photos/laptop.png";
//import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useMobile from "../../hooks/useMobile";
import { inViewport } from "../../style/atoms";
import { useSetAtom } from "jotai";
// import {
//     ChatBubbleLeftRightIcon,
//     EnvelopeOpenIcon,
// } from "@heroicons/react/24/outline";

const Hello: React.FC = () => {
    const isMobile = useMobile();

    const setIsInViewport = useSetAtom(inViewport);

    return (
        <section id='hello' className='mt-10 lg:mt-20'>
            <div className='w-full lg:grid-cols-3'>
                <div className='lg:hidden justify-center'>
                    <div className='grid-cols-2 grid-rows-2 h-[40vh] aspect-square'>
                        <Shape color='pink' position='bottom' />
                        <Shape color='orange' position='left' />
                        <Shape color='blue' position='right' />
                        <Shape
                            color='light-blue'
                            position='top'
                            imgString='profile'
                        />
                    </div>
                </div>
                <div className='hidden lg:grid justify-start relative'>
                    <div className='lg:grid-cols-3 lg:grid-rows-4 lg:h-[55vh] xl:h-[75vh]'>
                        <Shape color='light-pink' position='right' />
                        <Shape
                            color='light-blue'
                            position='left'
                            imgString='profile'
                        />
                        <Shape color='pink' position='bottom' flipped={true} />
                        <Shape color='orange' position='bottom' />
                        <Shape color='blue' position='left' />
                        <Shape color='light-orange' position='bottom' />
                        <Shape
                            color='light-blue'
                            position='bottom'
                            flipped={true}
                        />
                        <Shape color='orange' position='bottom' />
                        <Shape
                            color='light-pink'
                            position='right'
                            flipped={true}
                            imgString='typing'
                        />
                        <Shape color='pink' position='bottom' />
                        <Shape color='light-orange' position='right' />
                        <Shape color='blue' position='right' />
                    </div>
                </div>
                <div className='content-start lg:content-normal lg:mt-[10rem] lg:col-span-2 my-15 mb-20 z-10'>
                    <motion.div
                        className='w-[90%] m-auto lg:w-[80%] lg:pr-[10rem]'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.5,
                            ease: [0.1, 0.25, 0.3, 1],
                        }}
                        viewport={{ once: true }}>
                        <h1 className='text-[15vw] leading-[1] pt-10 lg:pt-0 lg:pb-3 lg:text-[5vw]'>
                            Hello!
                            <br /> I'm Joanna
                        </h1>
                        <p className='text-4xl/10 lg:text-xl font-light pb-6'>
                            <span className='hidden lg:inline'>
                                I'm Frontend Developer and I would like to
                                welcome you on my page.
                            </span>
                            <br /> Let me introduce myself: I create things you
                            can click on.
                        </p>
                        <motion.div
                            onViewportEnter={() => setIsInViewport(true)}
                            onViewportLeave={() => setIsInViewport(false)}>
                            <Button
                                link='contact'
                                text='Contact me'
                                align={
                                    isMobile ? "justify-start" : "justify-end"
                                }
                            />
                        </motion.div>
                    </motion.div>
                    {/* <div className='sm:hidden lg:grid lg:grid-flow-col lg:col-span-3 gap-4'>
                        <div className='bg-light-orange'>
                            <ChatBubbleLeftRightIcon className='h-8 w-8 text-white' />
                        </div>
                        <div className='bg-light-orange'>
                            <EnvelopeOpenIcon className='h-8 w-8 text-white' />
                        </div>
                        <div className='bg-light-orange'>
                            <EnvelopeOpenIcon className='h-8 w-8 text-white' />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Hello;
