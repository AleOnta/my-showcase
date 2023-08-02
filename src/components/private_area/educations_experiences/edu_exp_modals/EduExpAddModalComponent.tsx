import { Button, Col, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { EduExpInterface } from "../../../../assets/interfaces/EduExpInterface";

interface EduExpAddModalProps {
  show: boolean;
  onHide: () => void;
  nature: string;
  addEduExp: (eduExp: EduExpInterface, nature: string) => void;
}

const baseEduExp: EduExpInterface = {
  title: "",
  name: "",
  from: new Date().toISOString().slice(0, 10),
  to: new Date().toISOString().slice(0, 10),
  description: "",
};

export const EduExpAddModalComponent = ({
  show,
  onHide,
  nature,
  addEduExp,
}: EduExpAddModalProps) => {
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newEduExp, setNewEduExp] = useState<EduExpInterface>(baseEduExp);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setIsLoading(true);
    setTimeout(() => {
      addEduExp(newEduExp, nature);
      setIsLoading(false);
      setValidated(false);
      setNewEduExp(baseEduExp);
      onHide();
    }, 1000);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
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
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          id="add-edu-exp"
        >
          <Form.Group as={Col} xs="12" controlId="validationCustom01">
            <Form.Label>
              {nature === "edu" ? "Institute name:" : "Company name:"}
            </Form.Label>
            <Form.Control
              type="text"
              required
              minLength={2}
              placeholder={`Name of the ${
                nature === "edu" ? "institute" : "company"
              }`}
              value={newEduExp.title}
              onChange={(e) =>
                setNewEduExp({
                  ...newEduExp,
                  title: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="12" controlId="validationCustom02">
            <Form.Label>
              {nature === "edu" ? "Qualification:" : "Profession:"}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder={`Insert the ${
                nature === "edu" ? "course / title" : "qualification"
              }`}
              value={newEduExp.name}
              required
              onChange={(e) =>
                setNewEduExp({
                  ...newEduExp,
                  name: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid title.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="w-100 d-flex justify-content-between">
            <div className="edu-exp-datepicker-container">
              <Form.Group as={Col} xs="12" controlId="validationCustom03">
                <Form.Label>From:</Form.Label>
                <DatePicker
                  className="rounded"
                  required
                  selected={new Date(newEduExp.from)}
                  showYearDropdown
                  dateFormat={"yyyy-MM-dd"}
                  onChange={(date) => {
                    date &&
                      setNewEduExp({
                        ...newEduExp,
                        from: date?.toISOString().slice(0, 10),
                      });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid date.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="edu-exp-datepicker-container">
              <Form.Group as={Col} xs="12" controlId="validationCustom04">
                <Form.Label>To:</Form.Label>
                <DatePicker
                  className="rounded"
                  required
                  selected={new Date(newEduExp.to)}
                  showYearDropdown
                  dateFormat={"yyyy-MM-dd"}
                  onChange={(date) => {
                    date &&
                      setNewEduExp({
                        ...newEduExp,
                        to: date?.toISOString().slice(0, 10),
                      });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid date.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <Form.Group as={Col} xs="12" controlId="validationCustom04">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              required
              placeholder={`Write here a small description...`}
              rows={5}
              value={newEduExp.description}
              onChange={(e) =>
                setNewEduExp({
                  ...newEduExp,
                  description: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid description.
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          form="add-edu-exp"
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
