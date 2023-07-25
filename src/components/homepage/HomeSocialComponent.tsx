import { Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { GithubIcon } from "../social_icons/GithubIcon";
import { LinkedinIcon } from "../social_icons/LinkedinIcon";

export const HomeSocialComponent = () => {
  return (
    <>
      <Row className="m-0">
        <motion.div
          className="col col-12 text-center mt-5 text-uppercase mb-4 mb-lg-5 pt-xxl-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 1.4,
          }}
        >
          <h4>More About me</h4>
        </motion.div>
      </Row>
      <Row className="m-0 home-social-row mt-xl-4">
        <motion.div
          className="col-4 d-flex justify-content-center align-items-center py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.3,
            delay: 2,
          }}
        >
          <motion.span>
            <LinkedinIcon />
          </motion.span>
        </motion.div>
        <motion.div
          className="col-4 d-flex justify-content-center align-items-center py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.3,
            delay: 2.3,
          }}
        >
          <motion.span>
            <GithubIcon />
          </motion.span>
        </motion.div>
        <motion.div
          className="col-4 d-flex justify-content-center align-items-center py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.3,
            delay: 2.6,
          }}
        >
          <motion.span className="p3">
            <motion.svg
              whileHover={{ scale: 1.15 }}
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#777777"
              className="home-social-icon"
            >
              <motion.path
                stroke="inherit"
                stroke-linejoin="round"
                strokeWidth="12"
                d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
              />
            </motion.svg>
          </motion.span>
        </motion.div>
      </Row>
    </>
  );
};
