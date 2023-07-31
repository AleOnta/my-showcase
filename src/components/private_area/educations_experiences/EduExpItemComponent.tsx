import { Button, Card, Dropdown } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { EduExpInterface } from "../../../assets/interfaces/EduExpInterface";
import { PiNotePencilLight, PiTrash } from "react-icons/pi";

interface EduExpItemProps {
  index: number;
  nature: string;
  eduOrExp: EduExpInterface;
  allEduExp: EduExpInterface[];
  setEduExp: React.Dispatch<React.SetStateAction<EduExpInterface[]>>;
  remove: (i: number, type: string) => void;
}

export const EduExpItemComponent = ({
  index,
  eduOrExp,
  allEduExp,
  setEduExp,
  remove,
  nature,
}: EduExpItemProps) => {
  return (
    <motion.div
      className="px-0 my-3 card"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 0.4,
        stiffness: 120,
      }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <Card.Header>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h4 className="private-eduExp-title mb-0">{eduOrExp.title}</h4>
          <Dropdown id="eduExpDropdown">
            <Dropdown.Toggle
              id="dropdown-basic"
              className="p-1 private-eduExp-btn d-flex justify-content-center align-items-center"
            >
              <AiOutlineMenu className="icon" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Button className="dropdown-item d-flex align-items-center justify-content-start">
                <PiNotePencilLight className="me-2 fs-4" />
                <span>Edit education</span>
              </Button>
              <Button
                className="dropdown-item d-flex align-items-center justify-content-start"
                onClick={() => remove(index, nature)}
              >
                <PiTrash className="me-2 fs-4" />
                <span>Delete education</span>
              </Button>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="private-eduExp-subtitle mb-0">{eduOrExp.name}</h5>
          <span className="private-eduExp-dates">nov 22 - jun 23</span>
        </div>
      </Card.Header>
      <Card.Body>
        <p className="private-description-head mb-0">Description:</p>
        <p className="private-eduExp-description mb-0">
          {eduOrExp.description}
        </p>
      </Card.Body>
    </motion.div>
  );
};
