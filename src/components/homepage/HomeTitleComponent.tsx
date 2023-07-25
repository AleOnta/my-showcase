import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import html_tag from "../../assets/images/html_tag.svg";

export const HomeTitleComponent = () => {
  return (
    <Row className="m-0 home-title-row mt-5 d-flex justify-content-center">
      <Col xs={12} md={10} xl={8}>
        <motion.div
          className="row m-0 mb-2 home-upper-title-row"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
          }}
        >
          <Col className="home-upper-title-column">
            <h1 className="m-0 px-md-3 py-3 py-md-4">Welcome to</h1>
          </Col>
          <Col
            xs={4}
            md={3}
            className="home-upper-img-column p-0 ms-2 d-flex align-items-center justify-content-center"
          >
            <img
              src={html_tag}
              alt="icon of an html tag"
              className="home-upper-img"
            />
          </Col>
        </motion.div>
        <motion.div
          className="row m-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: 0.2,
          }}
        >
          <Col className="home-lower-title-column">
            <h1 className="home-lower-title m-0 px-md-3 py-3 py-md-4">
              My showcase project
            </h1>
          </Col>
        </motion.div>
      </Col>
    </Row>
  );
};
