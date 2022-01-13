import cs from "classnames";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: IProps) => {
  const { ref, inView } = useInView();

  return (
    <div className={cs(className, "uppercase text-center relative font-bold")}>
      <motion.div
        className="tracking-widest-extra text-white text-opacity-25 text-6xl"
        ref={ref}
        transition={{ duration: 1, delay: inView ? 0 : 2 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        {text}
      </motion.div>
      <motion.h2
        className="tracking-widest-extra text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ref={ref}
        transition={{ duration: 1, delay: inView ? 0 : 3 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        {text}
      </motion.h2>
    </div>
  );
};

export default Title;
