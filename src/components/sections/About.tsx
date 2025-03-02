import Shape from "../ui/Shape/Shape";
import { motion } from "framer-motion";
import profile from "../../assets/photos/profile.png";
import Icons from "../ui/Icons";
import { useState } from "react";
import { COLORS } from "../../config/globals";
import useMobile from "../../hooks/useMobile";
import AnimatedDiv from "../ui/AnimatedDiv";
import { SectionId } from "../../config/types";
import TriggerDiv from "../ui/TriggerDiv";

const About: React.FC = () => {
    const isMobile = useMobile();

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
                    initial={{ y: 0 }}
                    animate={{
                        y: visibleSection === "recently" ? -70 : 0,
                    }}
                    transition={{
                        duration: 0.33,
                        ease: "linear",
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
                <TriggerDiv
                    sectionId='soft-skills'
                    classes='lg:row-span-2 lg:row-start-3'
                    order={5}
                    isMobile={isMobile}
                    handleSetVisibility={handleSetVisibility}
                />
                <TriggerDiv
                    sectionId='beginning'
                    classes='lg:row-span-2 lg:col-start-1 lg:row-start-7'
                    order={2}
                    isMobile={isMobile}
                    handleSetVisibility={handleSetVisibility}
                />
                <TriggerDiv
                    sectionId='recently'
                    classes='lg:row-span-2 lg:col-start-2 lg:row-start-9'
                    order={4}
                    isMobile={isMobile}
                    handleSetVisibility={handleSetVisibility}
                />
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
                    <AnimatedDiv
                        visibleSection={visibleSection}
                        sectionId='beginning'
                        text="I began working in IT in 2015, but at
                                        first, I wasn't really into coding.
                                        Fortunately (and a bit unexpectedly), I
                                        was given a chance to dive into frontend
                                        development. Quickly, I realized how
                                        satisfying coding is—making designs come
                                        to life and seeing things happen with a
                                        click. Well, I think 'coding people' can
                                        understand that feeling. I decided to
                                        pursue this path and spent the next few
                                        years taking courses and following
                                        tutorials. (To be honest, I still
                                        do—yes, there's always something new
                                        coming up in frontend development.)"
                        classes='row-span-5 col-start-1 row-start-7'
                    />
                    <AnimatedDiv
                        visibleSection={visibleSection}
                        sectionId='recently'
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
                        classes='lg:row-span-4 lg:col-start-2 lg:row-start-8'
                    />
                    <AnimatedDiv
                        visibleSection={visibleSection}
                        sectionId='soft-skills'
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
                        classes='lg:row-span-9 lg:col-start-3 lg:row-start-3'
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default About;
