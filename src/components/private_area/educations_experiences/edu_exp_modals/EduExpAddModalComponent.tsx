import { Button, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { EduExpInterface } from "../../../../assets/interfaces/EduExpInterface";

interface EduExpAddModalProps {
  show: boolean;
  onHide: () => void;
  nature: string;
}

export const EduExpAddModalComponent = ({
  show,
  onHide,
  nature,
}: EduExpAddModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [newEduExp, setNewEduExp] = useState<EduExpInterface>({
    title: "",
    name: "",
    from: new Date().toISOString().slice(0, 10),
    to: new Date().toISOString().slice(0, 10),
    description: "",
  });

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="edit-edu-exp-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit {nature === "edu" ? "Education" : "Experience"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label htmlFor="edu-exp-title">
            {nature === "edu" ? "Institute name:" : "Company name:"}
          </Form.Label>
          <Form.Control
            type="text"
            id="edu-exp-title"
            value={newEduExp.title}
            onChange={(e) =>
              setNewEduExp({
                ...newEduExp,
                title: e.target.value,
              })
            }
          />
          <Form.Label htmlFor="edu-exp-name">
            {nature === "edu" ? "Qualification:" : "Profession:"}
          </Form.Label>
          <Form.Control
            type="text"
            id="edu-exp-name"
            value={newEduExp.name}
            onChange={(e) =>
              setNewEduExp({
                ...newEduExp,
                name: e.target.value,
              })
            }
          />
          <div className="w-100 d-flex justify-content-between">
            <div className="edu-exp-datepicker-container">
              <Form.Label htmlFor="edu-exp-from">From:</Form.Label>
              <DatePicker
                id="edu-exp-from"
                className="rounded"
                selected={new Date(newEduExp.from)}
                showYearDropdown
                onChange={(date) => {
                  date &&
                    setNewEduExp({
                      ...newEduExp,
                      from: date?.toISOString().slice(0, 10),
                    });
                }}
              />
            </div>
            <div className="edu-exp-datepicker-container">
              <Form.Label htmlFor="edu-exp-to">To:</Form.Label>
              <DatePicker
                id="edu-exp-to"
                className="rounded"
                selected={new Date(newEduExp.to)}
                showYearDropdown
                onChange={(date) => {
                  date &&
                    setNewEduExp({
                      ...newEduExp,
                      to: date?.toISOString().slice(0, 10),
                    });
                }}
              />
            </div>
          </div>
          <Form.Label htmlFor="edu-exp-description">Description:</Form.Label>
          <Form.Control
            as="textarea"
            id="edu-exp-description"
            rows={5}
            value={newEduExp.description}
            onChange={(e) =>
              setNewEduExp({
                ...newEduExp,
                description: e.target.value,
              })
            }
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className={`confirmation-btn ${
            isLoading &&
            "d-flex justify-content-center align-items-center loading"
          }`}
        >
          {isLoading ? (
            <span className="loader"></span>
          ) : (
            <span>Save changes</span>
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
