import { Button, Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import data from "../../../assets/content/Placeholder.json";
import { useState } from "react";
import { Info_ContactsInterface } from "../../../assets/interfaces/Info_ContactsInterface";
import { SocialModalComponent } from "../social_modal/SocialModalComponent";

export const InfoAndContactsItemComponent = () => {
  const [show, setShow] = useState<boolean>(false);
  const [purpose, setPurpose] = useState<string>("");

  const [infoAndContacts, setInfoAndContacts] = useSessionStorage(
    "info_contacts",
    data.info_contacts
  );
  const [staticInfoAndContacts, setStaticInfoAndContacts] =
    useState<Info_ContactsInterface>(infoAndContacts);

  return (
    <>
      <Form className="row m-0">
        <Col xs={12} md={6}>
          <Form.Label htmlFor="control-fullname-info">Fullname</Form.Label>
          <Form.Control
            id="control-fullname-info"
            value={staticInfoAndContacts.fullname}
            onChange={(e) =>
              setStaticInfoAndContacts({
                ...staticInfoAndContacts,
                fullname: e.target.value,
              })
            }
          />
          <Form.Label htmlFor="control-job-info">Job</Form.Label>
          <Form.Control
            id="control-job-info"
            value={staticInfoAndContacts.job}
            onChange={(e) =>
              setStaticInfoAndContacts({
                ...staticInfoAndContacts,
                job: e.target.value,
              })
            }
          />
          <Form.Label htmlFor="control-location-info">Location</Form.Label>
          <Form.Control
            id="control-location-info"
            value={staticInfoAndContacts.location}
            onChange={(e) =>
              setStaticInfoAndContacts({
                ...staticInfoAndContacts,
                location: e.target.value,
              })
            }
          />
          <Form.Label htmlFor="control-birthdate-info">Birthdate</Form.Label>
          <DatePicker
            id="control-birthdate-info"
            selected={new Date(staticInfoAndContacts.birthdate)}
            onChange={(date) => {
              date &&
                setStaticInfoAndContacts({
                  ...staticInfoAndContacts,
                  birthdate: date?.toISOString().slice(0, 10),
                });
            }}
          />
        </Col>
        <Col xs={12} md={6}>
          <Form.Label htmlFor="control-github-info">Github</Form.Label>
          <Form.Control
            id="control-github-info"
            value={staticInfoAndContacts.github.url}
            readOnly
            onClick={() => {
              setPurpose("github");
              setShow(true);
            }}
          />
          <Form.Label htmlFor="control-linkedin-info">LinkedIn</Form.Label>
          <Form.Control
            id="control-linkedin-info"
            value={staticInfoAndContacts.linkedin.url}
            readOnly
            onClick={() => {
              setPurpose("linkedin");
              setShow(true);
            }}
          />
          <Form.Label or="control-mobile-info">Mobile</Form.Label>
          <Form.Control
            id="control-mobile-info"
            type="number"
            value={staticInfoAndContacts.mobile}
            onChange={(e) =>
              setStaticInfoAndContacts({
                ...staticInfoAndContacts,
                mobile: parseInt(e.target.value),
              })
            }
          />
          <Form.Label htmlFor="control-email-info">Email Address</Form.Label>
          <Form.Control
            id="control-email-info"
            type="text"
            value={staticInfoAndContacts.email}
            onChange={(e) =>
              setStaticInfoAndContacts({
                ...staticInfoAndContacts,
                email: e.target.value,
              })
            }
          />
        </Col>
        <Col xs={12}>
          <Button
            className="confirmation-btn rounded-pill mt-3"
            disabled={staticInfoAndContacts === infoAndContacts}
          >
            Confirm changes
          </Button>
        </Col>
        <SocialModalComponent
          show={show}
          onHide={() => setShow(!show)}
          purpose={purpose}
          data={staticInfoAndContacts}
          setData={setStaticInfoAndContacts}
        />
      </Form>
    </>
  );
};
