import Shape from "../ui/Shape/Shape";
import Button from "../ui/Button";
//import profile from "../../assets/photos/profile.png";
// import laptop from "../../assets/photos/laptop.png";
//import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useMobile from "../../hooks/useMobile";

const Hello: React.FC = () => {
    const isMobile = useMobile();
    return (
        <section id='hello' className='mt-10 md:mt-20'>
            <div className='w-full md:grid-cols-2 '>
                <div className='md:hidden'>
                    <div className='grid-cols-2 grid-rows-2 h-[40vh]'>
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
                <div className='hidden md:grid justify-start relative'>
                    <div className='md:grid-cols-3 md:grid-rows-4 h-[75vh]'>
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
                <div className='content-start md:content-end my-15 mb-20 z-10'>
                    <motion.div
                        className='w-[90%] m-auto md:w-[80%]'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.5,
                            ease: "linear",
                        }}
                        viewport={{ once: true }}>
                        <h1 className='text-[15vw] leading-[1] pb-3 md:text-[5vw] '>
                            Hello!
                            <br /> I'm Joanna
                        </h1>
                        <p className='text-4xl/10 md:text-sm font-light pb-6'>
                            <span className='hidden md:inline'>
                                I'm Frontend Developer and I would like to
                                welcome you on my page.
                            </span>
                            <br /> Let me introduce myself: I create things you
                            can click on.
                        </p>
                        <motion.div>
                            <Button
                                link='contact'
                                text='Contact me'
                                align={
                                    isMobile ? "justify-start" : "justify-end"
                                }
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hello;
