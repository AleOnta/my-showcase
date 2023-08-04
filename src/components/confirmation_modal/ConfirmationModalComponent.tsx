import { Button, Modal } from "react-bootstrap";
import { EduExpInterface } from "../../assets/interfaces/EduExpInterface";

interface ConfirmationModalProps {
  show: boolean;
  onHide: () => void;
  nature: string;
  deletion?: () => void;
}

export const ConfirmationModalComponent = ({
  show,
  onHide,
  nature,
  deletion,
}: ConfirmationModalProps) => {
  return (
    <Modal
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      className="confirmation-modal"
    >
      <Modal.Header
        closeButton
        onHide={onHide}
        className={`${
          nature === "contact" ? "header-contact" : "header-deletion"
        }`}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          {nature === "contact"
            ? "Message correctly sent!"
            : "Confirm deletion"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={`${nature === "contact" ? "body-contact" : "body-deletion"}`}
      >
        <div className="d-flex justify-content-around align-items-center">
          {nature === "contact" ? (
            <>
              <p className="m-0">
                Thanks for your contact, i really appreciate your interest.
              </p>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                className="confirmation-svg"
              >
                <path
                  d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm5.7279221 11-7.0710679 7.0710678-4.2426406-4.2426407-1.4142136 1.4142136 5.6568542 5.6568542 8.4852814-8.4852813z"
                  fill="#29AB87"
                  fill-rule="evenodd"
                />
              </svg>
            </>
          ) : (
            <>
              <p className="m-0">Do you confirm the education deletion?</p>
              <svg
                version="1.1"
                id="svg2"
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 1200 1200"
                enable-background="new 0 0 1200 1200"
                fill=" #B22222"
              >
                <path
                  id="path24343"
                  d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600 s600-268.629,600-600S931.371,0,600,0z M506.909,224.341h186.182v57.422h217.09v105.688H289.819V281.763h217.09V224.341z M323.145,467.871h553.71v507.788h-553.71V467.871z"
                />
              </svg>
            </>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer
        className={`${
          nature === "contact" ? "footer-contact" : "footer-deletion"
        }`}
      >
        <Button onClick={onHide} className="confirmation-btn">
          {nature === "contact" ? "Close" : "Cancel"}
        </Button>
        {nature === "deletion" && (
          <Button variant="danger" className="delete-btn" onClick={deletion}>
            Delete
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
