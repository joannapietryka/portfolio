import ContactForm from "../ContactForm/ContactForm";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
    return (
        <motion.section id='contact' className='justify-center'>
            <div className='items-center'>
                <div className='self-end'>
                    <h2>Let's work together</h2>
                    <p>Drop me a message</p>
                </div>
                <ContactForm />
            </div>
        </motion.section>
    );
};

export default Contact;
