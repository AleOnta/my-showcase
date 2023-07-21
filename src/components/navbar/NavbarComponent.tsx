import { Button, Col, Container, Row } from "react-bootstrap";
import Logo from "./../../assets/images/showcase_logo.svg";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <Container fluid className="p-0 navbar-custom">
      <Row className="m-0">
        <Col xs={12} className="bg-dark py-3 px-0">
          <Row className="m-0 d-flex justify-content-between">
            <Col>
              <img src={Logo} alt="Custom Logo Ale Onta" width={140} />
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <ul className="d-flex align-items-center text-light list-unstyled m-0 nav-link-list">
                <li className="me-5 text-uppercase">
                  <Link className="nav-link" to="/homepage">
                    Home
                  </Link>
                </li>
                <li className="me-5 text-uppercase">
                  <Link className="nav-link" to="/prospect">
                    My CV
                  </Link>
                </li>
                {loggedIn ? (
                  <li className="me-5 text-uppercase">
                    <Button className="login-btn">Login</Button>
                  </li>
                ) : (
                  <motion.li
                    className="me-5 text-dark position-relative logged-in-list-item"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <motion.div
                      className="logged-in-btn position-relative"
                      whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                    >
                      <span className="position-absolute logged-in-char">
                        A
                      </span>
                    </motion.div>
                    <motion.ul
                      className="position-absolute list-unstyled user-list py-2"
                      variants={{
                        open: {
                          clipPath: "inset(0% 0% 0% 0% round 10px)",
                          transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05,
                          },
                        },
                        closed: {
                          clipPath: "inset(10% 50% 90% 50% round 10px)",
                          transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3,
                          },
                        },
                      }}
                      style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    >
                      <motion.li
                        className="px-3 py-2 text-uppercase"
                        variants={itemVariants}
                      >
                        Address:{" "}
                      </motion.li>
                      <motion.li
                        className="px-3 py-2 text-uppercase"
                        variants={itemVariants}
                      >
                        ETH:{" "}
                      </motion.li>
                      <motion.li
                        className="px-3 py-2 text-uppercase"
                        variants={itemVariants}
                      >
                        USDC:{" "}
                      </motion.li>
                      <motion.li
                        className="px-3 py-2 text-uppercase"
                        variants={itemVariants}
                      >
                        <Link className="nav-link" to="/private-area">
                          Private Area
                        </Link>
                      </motion.li>
                    </motion.ul>
                  </motion.li>
                )}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
