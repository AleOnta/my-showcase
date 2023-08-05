import { Variants, motion } from "framer-motion";
import { IconBase } from "react-icons/lib";

interface StackComponentProps {
  icon: any;
  name: string;
}

export const SingleStackComponent = ({ icon, name }: StackComponentProps) => {
  const tooltipVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      className="col col-3 icon-stack-col p-0 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-sm-4 mb-xxl-5 position-relative"
      initial="initial"
      animate="initial"
      whileHover="animate"
    >
      <IconBase className="resume-stack-icon">{icon}</IconBase>
      <motion.div
        className="stack-tooltip px-2 py-1"
        variants={tooltipVariants}
      >
        {name}
      </motion.div>
    </motion.div>
  );
};
