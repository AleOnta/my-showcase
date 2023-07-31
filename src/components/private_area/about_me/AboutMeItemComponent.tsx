import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useState } from "react";
import { AboutMeInterface } from "../../../assets/interfaces/AboutMeInterface";
import data from "../../../assets/content/Placeholder.json";

export const AboutMeItemComponent = () => {
  const [aboutMe, setAboutMe] = useSessionStorage("about_me", data.about_me);
  const [staticAboutMe, setStaticAboutMe] = useState<AboutMeInterface>(aboutMe);

  return (
    <Form className="row m-0 d-flex flex-column flex-md-row">
      <Col>
        <Row className="m-0 d-flex flex-column flex-sm-row aling-items-center justify-content-sm-around">
          <motion.div
            className="col col-12 d-flex flex-row align-items-center justify-content-center p-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.6,
              stiffness: 140,
            }}
          >
            <div className="img-preview"></div>
          </motion.div>
          <Col className="d-flex align-items-end p-0 px-sm-2">
            <Form.Group controlId="formFile" className="mb-3 mb-sm-0">
              <Form.Label className="file-picker-label">
                Pick a local file
              </Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>
      </Col>
      <Col>
        <Form.Label htmlFor="control-fullname">Fullname</Form.Label>
        <FormControl
          id="control-fullname"
          type="text"
          value={staticAboutMe.fullname}
          onChange={(e) =>
            setStaticAboutMe({
              ...staticAboutMe,
              fullname: e.target.value,
            })
          }
        />
        <Form.Label htmlFor="control-job-aboutme">
          Professional figure
        </Form.Label>
        <FormControl
          type="text"
          defaultValue={aboutMe.job}
          onChange={(e) =>
            setStaticAboutMe({
              ...staticAboutMe,
              job: e.target.value,
            })
          }
        />
        <Form.Label htmlFor="control-bio">Biography</Form.Label>
        <FormControl
          as="textarea"
          rows={4}
          defaultValue={aboutMe.bio}
          className="control-area"
          onChange={(e) =>
            setStaticAboutMe({
              ...staticAboutMe,
              bio: e.target.value,
            })
          }
        />
        <Button
          className="confirmation-btn rounded-pill mt-3"
          disabled={aboutMe === staticAboutMe}
          onClick={() => setAboutMe(staticAboutMe)}
        >
          Confirm changes
        </Button>
      </Col>
    </Form>
  );
};
