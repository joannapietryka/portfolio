import Shape from "../ui/Shape/Shape";
import { motion } from "framer-motion";
import profile from "../../assets/photos/profile.png";
import Icons from "../ui/Icons";
import { useState } from "react";
import { COLORS } from "../../config/globals";
import useMobile from "../../hooks/useMobile";
import { SectionId } from "../../config/types";
import AnimatedDiv from "../ui/AnimatedDiv";
import FadeIn from "../ui/FadeIn";

const About: React.FC = () => {
    const isMobile = useMobile();
    const [visibleSection, setVisibleSection] = useState<SectionId | null>(
        null
    );

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
            <div className='w-full p-3 relative lg:grid-cols-3 lg:first-line lg:grid-rows-11 gap-4 lg:grid-flow-row lg:auto-rows-min'>
                <div className='text-center lg:col-span-3 lg:row-span-2'>
                    <FadeIn>
                        <h2 className='text-[16vw] text-white'>about me</h2>
                    </FadeIn>
                </div>

                <div
                    className={`lg:row-span-4 lg:row-start-3 ${
                        isMobile && "order-3"
                    }`}>
                    <FadeIn delay={0.3} from='top'>
                        <div className='bg-blue'>
                            <div className='grid-cols-6 grid-rows-3 lg:grid-rows-4 place-items-center w-full h-full p-3'>
                                <Icons />
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <motion.div
                    initial={{ y: 0 }}
                    animate={{
                        y: !isMobile && visibleSection === "recently" ? -70 : 0,
                    }}
                    transition={{
                        duration: 0.33,
                        ease: "linear",
                    }}
                    className={`lg:row-span-5 lg:row-start-4  ${
                        isMobile && "order-1"
                    }`}>
                    <FadeIn delay={0.3} from='right'>
                        <div className='bg-white place-items-center relative rounded-tr-[75px] overflow-hidden'>
                            <div className='grid-flow-col h-full'>
                                <div className='p-5 z-10 items-end'>
                                    <h3>Welcome!</h3>
                                    <p className='text-xl self-end w-[140%]'>
                                        Thanks for finding a moment to read a
                                        few words about me. As a professional, I
                                        created this website mainly to present
                                        my frontend skills but also my personal
                                        story and areas of interest.
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
                        </div>
                    </FadeIn>
                </motion.div>
                <AnimatedDiv
                    sectionId='soft-skills'
                    classes='row-start-8 lg:row-span-2 lg:row-start-3'
                    order={5}
                    text="With a background in journalism, public
                    relations, and marketing, I began my
                    professional career in e-commerce and
                    marketing departments. This experience
                    has given me a strong understanding of
                    SEO and the needs of marketing teams.
                    <br />
                    I have a keen interest in user
                    experience (UX) and strive to apply this
                    knowledge to develop intuitive,
                    user-friendly applications. I believe my
                    skills make me well-suited for creating
                    documentation, tutorials, and user
                    training materials.
                    <br />
                    I am detail-oriented, patient, and
                    highly organized in my work. I adapt
                    quickly and am skilled at conducting
                    in-depth research—an essential trait in
                    frontend development, where technologies
                    are constantly evolving. I believe it's
                    crucial to stay informed and select the
                    best tools for each project.
                    <br />
                    Additionally, I am a strong communicator
                    with a clear and precise approach. I
                    enjoy collaborating across departments
                    and explaining technical concepts in an
                    accessible way."
                    isMobile={isMobile}
                    handleSetVisibility={handleSetVisibility}
                    visibleSection={visibleSection}
                />
                <AnimatedDiv
                    sectionId='beginning'
                    classes='row-start-2 lg:row-span-2 lg:col-start-1 lg:row-start-7'
                    order={2}
                    text="I began working in IT in 2015, but at
                    first, I wasn't really into coding.
                    Fortunately (and a bit unexpectedly), I
                    was given a chance to dive into frontend
                    development. Quickly, I realized how
                    satisfying coding is—making designs come
                    to life and seeing things happen with a
                    click. Well, I think 'coding people' can
                    understand that feeling. <br />I decided to
                    pursue this path and spent the next few
                    years taking courses and following
                    tutorials. (To be honest, I still
                    do—yes, there's always something new
                    coming up in frontend.)"
                    isMobile={isMobile}
                    handleSetVisibility={handleSetVisibility}
                    visibleSection={visibleSection}
                />
                <AnimatedDiv
                    sectionId='recently'
                    classes='row-start-6 lg:row-span-2 lg:col-start-2 lg:row-start-9'
                    order={4}
                    text='As for many, my life changed during the
                    Covid era. I started working remotely,
                    and to avoid spending long and lonely
                    weeks in my studio flat in Krakow, I
                    decided to explore the Canary Islands. I
                    found more sun there, but also... my
                    French partner. Long story short, I
                    recently moved to Bordeaux, where I am
                    intensively learning French, looking for
                    new job opportunities, and making new
                    friends.'
                    isMobile={isMobile}
                    handleSetVisibility={handleSetVisibility}
                    visibleSection={visibleSection}
                />
                <div
                    className={` lg:row-span-7 lg:col-start-3 lg:row-start-5 ${
                        isMobile && "order-6"
                    }`}>
                    <FadeIn delay={0.4}>
                        <div className='bg-light-blue items-end'>
                            <img
                                className='cover'
                                src={profile}
                                alt='Joanna Pietryka picture'
                            />
                        </div>
                    </FadeIn>
                </div>
                <div className='lg:row-span-3 lg:row-start-9'>
                    <FadeIn delay={0.4}>
                        <div className='bg-shapes bg-cover place-items-center'></div>
                    </FadeIn>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
