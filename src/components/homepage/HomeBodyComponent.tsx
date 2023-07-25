import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

export const HomeBodyComponent = () => {
  return (
    <Row className="m-0 home-body-row d-flex justify-content-center">
      <motion.div
        className="col col-md-10 col-xl-8"
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.2,
          duration: 3,
        }}
      >
        <motion.p className="home-body-paragraph">
          In this side project, i am moving my first steps in the Web3 web
          development, with the implementation of a login procedure through a
          digital wallet (Metamask).
        </motion.p>
        <motion.p className="home-body-paragraph">
          To try this feature, click the <code>login</code> button in the right
          corner of the navbar.
        </motion.p>
        <motion.p className="home-body-paragraph">
          <code>Please note</code> that by fulfilling the login process will
          automatically allow you to modify the CV structure & content.
          <br />
        </motion.p>
        <motion.p className="home-body-paragraph">
          An another feature of this project, it's to allow visitors to view my
          CV and evaluate my professional figure.
          <br />
          Visit the dedicated page by clicking the <code>My CV</code> link in
          the upper navbar.
        </motion.p>
      </motion.div>
    </Row>
  );
};
