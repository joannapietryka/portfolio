import ContactForm from "../ContactForm/ContactForm";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
    return (
        <motion.section id='contact' className='md:justify-center relative'>
            <motion.div
                className='bg-orange absolute '
                initial={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    top: 0,
                    right: "50%",
                }}
                whileInView={{
                    width: "100vh",
                    height: "100vh",
                    top: "-50%",
                    transform: "translateX(50%)",
                }}
                transition={{ duration: 4, delay: 2 }}></motion.div>
            <div className='items-center relative z-10'>
                <div className='self-end'>
                    <h2 className='text-white text-[5vw]'>
                        Let's work together
                    </h2>
                    <p className='text-white'>Drop me a message</p>
                </div>
                <ContactForm />
            </div>
        </motion.section>
    );
};

export default Contact;
