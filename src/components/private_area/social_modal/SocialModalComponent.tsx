import { Button, Form, Modal } from "react-bootstrap";
import { Info_ContactsInterface } from "../../../assets/interfaces/Info_ContactsInterface";
import { useState, useEffect } from "react";
import { SocialInterface } from "../../../assets/interfaces/Social";

interface SocialModalProps {
  show: boolean;
  onHide: () => void;
  purpose: string;
  data: Info_ContactsInterface;
  setData: React.Dispatch<React.SetStateAction<Info_ContactsInterface>>;
}

export const SocialModalComponent = ({
  show,
  onHide,
  purpose,
  data,
  setData,
}: SocialModalProps) => {
  const [socialValues, setSocialValues] = useState<SocialInterface>(
    purpose === "github" ? data.github : data.linkedin
  );

  useEffect(() => {
    setSocialValues(purpose === "github" ? data.github : data.linkedin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const saveChanges = () => {
    if (purpose === "github") {
      setData({
        ...data,
        github: socialValues,
      });
    } else {
      setData({
        ...data,
        linkedin: socialValues,
      });
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {purpose === "github" ? "Github Settings" : "Linkedin Settings"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {socialValues && (
            <>
              <Form.Label htmlFor="social-username">Username</Form.Label>
              <Form.Control
                type="text"
                id="social-username"
                value={socialValues.username}
                onChange={(e) =>
                  setSocialValues({
                    ...socialValues,
                    username: e.target.value,
                  })
                }
              />
              <Form.Label htmlFor="social-url">url</Form.Label>
              <Form.Control
                type="text"
                id="social-url"
                value={socialValues.url}
                onChange={(e) =>
                  setSocialValues({
                    ...socialValues,
                    url: e.target.value,
                  })
                }
              />
            </>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="confirmation-btn"
          onClick={() => {
            saveChanges();
            onHide();
          }}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
