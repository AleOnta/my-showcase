import { Button, Modal } from "react-bootstrap";

interface ConfirmationModalProps {
  show: boolean;
  onHide: () => void;
  nature: string;
}

export const ConfirmationModalComponent = ({
  show,
  onHide,
  nature,
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
        </div>
      </Modal.Body>
      <Modal.Footer
        className={`${
          nature === "contact" ? "footer-contact" : "footer-deletion"
        }`}
      >
        <Button onClick={onHide} className="confirmation-btn">
          Close
        </Button>
        {nature === "delete" && <Button variant="danger">Delete</Button>}
      </Modal.Footer>
    </Modal>
  );
};
