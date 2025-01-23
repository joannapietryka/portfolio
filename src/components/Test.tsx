import { motion } from "framer-motion";
const Test: React.FC = () => {
    return (
        <section>
            <motion.div
                className='bg-light-orange'
                initial={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                }}
                whileInView={{
                    width: "100vw",
                    height: "100vh",
                }}
                transition={{ duration: 4, delay: 2 }}></motion.div>
        </section>
    );
};

export default Test;
