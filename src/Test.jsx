import { motion } from "framer-motion";

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const Test = () => {
    return (
        <div className="course">
            <motion.div
                className="box"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                whileHover={{ opacity: 0.2 }}
                whileInView={{ scale: 2 }}
                drag
            >
                test
            </motion.div>
        </div>
    );
};

export default Test;
