import { motion } from "framer-motion";

const Test = () => {
    return (
        <div className="course">
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ opacity: 0.2 }}
                drag
            >
                test
            </motion.div>
        </div>
    );
};

export default Test;
