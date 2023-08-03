import { Button, Col, Form, Row } from "react-bootstrap";
import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
  BiMobileAlt,
  BiCurrentLocation,
} from "react-icons/bi";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import data from "../../../assets/content/Placeholder.json";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface MessageInterface {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

export const ContactFormComponent = () => {
  const form = useRef<HTMLFormElement>(null);
  const [validated, setValidated] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [myContacts, setMyContacts] = useSessionStorage(
    "info_contacts",
    data.info_contacts
  );
  const [message, setMessage] = useState<MessageInterface>({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form_ev = event.currentTarget;
    if (form_ev.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    setValidated(true);
    console.log(form.current);

    if (
      process.env.REACT_APP_EMAILJS_SERVICE_ID &&
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID &&
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ) {
      form.current &&
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
              console.log(form.current);
            }
          );
    }
  };

  useEffect(() => {
    setMessage({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
  }, []);

  return (
    <Col xs={12} className="contact-form-container mt-4 p-0">
      <Row className="m-0 d-md-flex justify-content-center ">
        <Col
          xs={12}
          md={6}
          lg={5}
          xl={6}
          className="message-column mb-4 mb-md-0 py-4"
        >
          <h3>Send me a message</h3>
          <Form validated onSubmit={handleSubmit} ref={form}>
            <Form.Group id="contact-form-validation-1">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                name="user_firstname"
                placeholder="firstname..."
                value={message.firstname}
                onChange={(e) =>
                  setMessage({
                    ...message,
                    firstname: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group id="contact-form-validation-1">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                name="user_lastname"
                placeholder="lastname..."
                value={message.lastname}
                onChange={(e) =>
                  setMessage({
                    ...message,
                    lastname: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group id="contact-form-validation-1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="example@provider.com"
                value={message.email}
                onChange={(e) =>
                  setMessage({
                    ...message,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group id="contact-form-validation-1">
              <Form.Label>Your message</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                name="message"
                placeholder="Write your message here..."
                value={message.message}
                onChange={(e) =>
                  setMessage({
                    ...message,
                    message: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Button type="submit" className="mt-2 message-send-btn">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={6} lg={5} xl={4} className="contact-column py-4">
          <h3>... Or contact me</h3>
          <p className="mb-2 mb-md-5">At the following:</p>
          <div className="w-100 d-flex align-items-center">
            <div className="contact-icon me-3 d-flex align-items-center justify-content-center">
              <BiMobileAlt className="fs-3 text-light" />
            </div>
            <Link to={"tel:+39 " + myContacts.mobile} className="contact-value">
              (+39){" " + myContacts.mobile}
            </Link>
          </div>
          <hr className="mt-2 mx-2 mb-custom" />
          <div className="w-100 d-flex align-items-center">
            <div className="contact-icon me-3 d-flex align-items-center justify-content-center">
              <BiLogoGmail className="fs-3 text-light" />
            </div>
            <Link to={"mailto:" + myContacts.email} className="contact-value">
              {myContacts.email}
            </Link>
          </div>
          <hr className="mt-2 mx-2 mb-custom" />
          <div className="w-100 d-flex align-items-center">
            <div className="contact-icon me-3 d-flex align-items-center justify-content-center">
              <BiCurrentLocation className="fs-3 text-light" />
            </div>
            <p className="contact-value m-0">{myContacts.location}</p>
          </div>
          <hr className="mt-2 mx-2 mb-custom" />
          <div className="w-100 d-flex align-items-center">
            <div className="contact-icon me-3 d-flex align-items-center justify-content-center">
              <BiLogoLinkedin className="fs-3 text-light" />
            </div>
            <Link
              to={myContacts.linkedin.url}
              target="_blank"
              className="contact-value"
            >
              {myContacts.linkedin.username}
            </Link>
          </div>
          <hr className="mt-2 mx-2 mb-custom" />
          <div className="w-100 d-flex align-items-center">
            <div className="contact-icon me-3 d-flex align-items-center justify-content-center">
              <BiLogoGithub className="fs-3 text-light" />
            </div>
            <Link
              to={myContacts.github.url}
              target="_blank"
              className="contact-value"
            >
              {myContacts.github.username}
            </Link>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
