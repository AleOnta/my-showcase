import { Button, Form, Modal } from "react-bootstrap";
import { EduExpInterface } from "../../../../assets/interfaces/EduExpInterface";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";

interface EduExpEditModalsProps {
  show: boolean;
  onHide: () => void;
  nature: string;
  index: number;
  eduOrExp: EduExpInterface;
  edit_delete: (i: number, type: string, eduExp?: EduExpInterface) => void;
}

export const EduExpEditModalComponent = ({
  show,
  onHide,
  nature,
  index,
  eduOrExp,
  edit_delete,
}: EduExpEditModalsProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasChanged, setHasChanged] = useState<boolean>(false);
  const [updatedEduExp, setUpdatedEduExp] = useState<EduExpInterface>(eduOrExp);

  useEffect(() => {
    if (
      updatedEduExp.title === eduOrExp.title &&
      updatedEduExp.name === eduOrExp.name &&
      updatedEduExp.from === eduOrExp.from &&
      updatedEduExp.to === eduOrExp.to &&
      updatedEduExp.description === eduOrExp.description
    ) {
      setHasChanged(false);
    } else {
      setHasChanged(true);
    }
  }, [updatedEduExp, eduOrExp]);

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
          Edit {nature === "edu" ? "Education" : "Experience"} #{index}
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
            value={updatedEduExp.title}
            onChange={(e) =>
              setUpdatedEduExp({
                ...updatedEduExp,
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
            value={updatedEduExp.name}
            onChange={(e) =>
              setUpdatedEduExp({
                ...updatedEduExp,
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
                selected={new Date(updatedEduExp.from)}
                showYearDropdown
                dateFormat={"yyyy-MM-dd"}
                onChange={(date) => {
                  date &&
                    setUpdatedEduExp({
                      ...updatedEduExp,
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
                selected={new Date(updatedEduExp.to)}
                dateFormat={"yyyy-MM-dd"}
                showYearDropdown
                onChange={(date) => {
                  date &&
                    setUpdatedEduExp({
                      ...updatedEduExp,
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
            value={updatedEduExp.description}
            onChange={(e) =>
              setUpdatedEduExp({
                ...updatedEduExp,
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
          onClick={() => {
            if (hasChanged) {
              setIsLoading(true);
              console.log(`edit_${nature}`);
              setTimeout(() => {
                edit_delete(index, `edit_${nature}`, updatedEduExp);
                onHide();
                setHasChanged(false);
                setIsLoading(false);
              }, 1000);
            } else {
              onHide();
            }
          }}
        >
          {isLoading ? (
            <span className="loader"></span>
          ) : (
            <span>{!hasChanged ? "Get Back" : "Save changes"}</span>
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
