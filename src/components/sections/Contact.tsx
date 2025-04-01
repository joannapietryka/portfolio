import ContactForm from "../ContactForm/ContactForm";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
    return (
        <motion.section
            id='contact'
            className='lg:justify-center relative lg:mb-10'
            data-testid='contact'>
            <div className='items-center relative z-10 w-[90vw] lg:w-full'>
                <motion.div
                    className='bg-light-orange absolute'
                    initial={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        top: 0,
                        right: "50%",
                    }}
                    whileInView={{
                        width: "120vh",
                        height: "120vh",
                        top: "-75%",
                        transform: "translateX(50%)",
                    }}
                    transition={{ duration: 4, delay: 2 }}></motion.div>
                <div className='self-end z-10'>
                    <h2 className='text-white text-[15vw] leading-[1] lg:text-[5vw]'>
                        Let's work together
                    </h2>
                    <p className='text-white pt-10'>Drop me a message</p>
                </div>
                <ContactForm />
            </div>
        </motion.section>
    );
};

export default Contact;
