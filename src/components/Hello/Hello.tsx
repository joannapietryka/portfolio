import Shape from "../Shape/Shape";
import Button from "../Button/Button";
// import profile from "../../assets/photos/profile.png";
// import laptop from "../../assets/photos/laptop.png";
//import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hello: React.FC = () => {
    return (
        <section id='hello' className='section lg:grid-cols-2 mt-20'>
            <div className='justify-start relative'>
                <div className='grid-cols-3 grid-rows-4 h-[80vh]'>
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
            <div className='content-end my-15 mb-20 z-10'>
                <motion.div
                    className='w-[80%]'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
                    viewport={{ once: true }}>
                    <h1 className='pb-3 text-[5vw] leading-[1]'>
                        Hello!
                        <br /> I'm Joanna
                    </h1>
                    <p className='text-s font-light pb-6'>
                        I'm Frontend Developer and I would like to welcome you
                        on my page.
                        <br /> Let me introduce myself: I create things you can
                        click on.
                    </p>
                    <motion.div>
                        <Button
                            link='contact'
                            text='Contact me'
                            align='justify-end'
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hello;
