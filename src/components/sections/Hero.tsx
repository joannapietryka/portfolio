import Shape from "../ui/Shape/Shape";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import useMobile from "../../hooks/useMobile";
import { inViewport } from "../../style/atoms";
import { useSetAtom } from "jotai";
import FadeIn from "../ui/FadeIn";

const Hero: React.FC = () => {
    const isMobile = useMobile();

    const setIsInViewport = useSetAtom(inViewport);

    return (
        <section id='hello' className='mt-10 lg:mt-20' data-testid='hello'>
            <div className='w-full lg:grid-cols-3'>
                <div
                    className='justify-center'
                    data-testid='mobile'
                    style={{ display: isMobile ? "grid" : "none" }}>
                    <FadeIn>
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
                    </FadeIn>
                </div>
                <div
                    style={{ display: isMobile ? "none" : "grid" }}
                    data-testid='desktop'>
                    <FadeIn from='left' delay={0.3}>
                        <div className='justify-end items-center relative'>
                            <div className='lg:grid-cols-3 lg:grid-rows-4 lg:h-[min(85%,450px)] xl:h-[min(85%,600px)] 2xl:h-[min(70%,700px)] 2xl:mb-20'>
                                <Shape color='light-pink' position='right' />
                                <Shape
                                    color='light-blue'
                                    position='left'
                                    imgString='profile'
                                />
                                <Shape
                                    color='pink'
                                    position='bottom'
                                    flipped={true}
                                />
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
                    </FadeIn>
                </div>
                <div className='content-start lg:content-normal lg:mt-[10rem] lg:col-span-2 my-15 mb-20 z-10'>
                    <div className='w-[90%] m-auto lg:w-[70%] xl:w-[80%] xl:pr-[3rem] 2xl:pr-[10rem]'>
                        <FadeIn>
                            <h1 className='text-[15vw] leading-[1] pt-10 lg:pt-0 lg:pb-3 lg:text-[5vw]'>
                                Hello!
                                <br /> I'm Joanna
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <p className='text-4xl/10 lg:text-xl font-light pb-6'>
                                <span className='hidden lg:inline'>
                                    I'm Frontend Developer and I would like to
                                    welcome you on my page.
                                </span>
                                <br /> Let me introduce myself: I create things
                                you can click on.
                            </p>
                        </FadeIn>
                        <motion.div
                            onViewportEnter={() => setIsInViewport(true)}
                            onViewportLeave={() => setIsInViewport(false)}>
                            <FadeIn delay={0.6}>
                                <Button
                                    link='contact'
                                    text='Contact me'
                                    align={
                                        isMobile
                                            ? "justify-start"
                                            : "justify-end"
                                    }
                                />
                            </FadeIn>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
