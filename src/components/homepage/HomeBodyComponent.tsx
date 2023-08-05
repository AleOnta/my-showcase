import { Row } from "react-bootstrap";
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
          In this side project, i am moving my first steps in the{" "}
          <code>Web3 development</code>, with the implementation of a login
          procedure through a digital wallet (Metamask).
        </motion.p>
        <motion.p className="home-body-paragraph">
          To test this feature be sure to have installed the{" "}
          <code>Metamask's extension</code> on your browser. Once this is done,
          you can proceed by clicking on the <code>Connect</code> button, placed
          in the top-right side of the navbar.
        </motion.p>
        <motion.p className="home-body-paragraph">
          <code>Please note</code> that fulfilling the login process, will
          automatically give you access to the <code>private-area</code> of this
          web application.
          <br />
          In this area you will be able to manipulate data of my CV - but for
          safety reason, yor changes will be stored into the{" "}
          <code>SessionStorage</code> of your browser.
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
