import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkedinIcon } from "../social_icons/LinkedinIcon";
import { GithubIcon } from "../social_icons/GithubIcon";
import { motion } from "framer-motion";

export const FooterComponent = () => {
  return (
    <div className="pt-5 pb-5 footer bg-dark">
      <Container>
        <Row className="m-0">
          <Col xs={12} lg={5} className="footer-about-company">
            <h2>My-Showcase</h2>
            <p className="pr-5 text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ante mollis quam tristique convallis{" "}
            </p>
            <p>
              <Link to="#" className="footer-icon-link">
                <LinkedinIcon />
              </Link>
              <Link to="#" className="footer-icon-link">
                <GithubIcon />
              </Link>
              <Link to="#" className="footer-icon-link">
                <motion.svg
                  whileHover={{ scale: 1.15 }}
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#777777"
                  className="home-social-icon gmail-icon"
                >
                  <motion.path
                    stroke="inherit"
                    stroke-linejoin="round"
                    strokeWidth="12"
                    d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
                  />
                </motion.svg>
              </Link>
            </p>
          </Col>
          <Col xs={12} lg={3} className="footer-links">
            <h4 className="mt-lg-0 mt-3">Links</h4>
            <ul className="m-0 p-0">
              <li>
                -{" "}
                <Link to="#" className="footer-link">
                  Homepage
                </Link>
              </li>
              <li>
                -{" "}
                <Link to="#" className="footer-link">
                  My Resume
                </Link>
              </li>
              <li>
                -{" "}
                <Link to="#" className="footer-link">
                  About me
                </Link>
              </li>
              <li>
                -{" "}
                <Link to="#" className="footer-link">
                  Privacy policy
                </Link>
              </li>
              <li>
                -{" "}
                <Link to="#" className="footer-link">
                  Terms of service
                </Link>
              </li>
              <li>
                -{" "}
                <Link to="#" className="footer-link">
                  Lorem ipsum
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} lg={4} className="footer-location">
            <h4 className="mt-lg-0 mt-3">Milano</h4>
            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
            <p className="mb-0">
              <i className="fa fa-phone mr-3"></i>(+39) 327 479 4091
            </p>
            <p>alessandro-ontani@outlook.com</p>
          </Col>
        </Row>
        <Row className="m-0 mt-5">
          <Col className="footer-copyright">
            <p>
              <small className="text-white-50">
                © 2019. All Rights Reserved.
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
