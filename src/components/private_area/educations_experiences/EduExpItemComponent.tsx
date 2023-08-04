import { Button, Card, Dropdown } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { EduExpInterface } from "../../../assets/interfaces/EduExpInterface";
import {
  PiNotePencilLight,
  PiTrash,
  PiArrowsInLineVerticalThin,
  PiArrowsOutLineVerticalThin,
} from "react-icons/pi";
import { useState, useRef } from "react";
import { EduExpEditModalComponent } from "./edu_exp_modals/EduExpEditModalComponent";
import { ConfirmationModalComponent } from "../../confirmation_modal/ConfirmationModalComponent";

interface EduExpItemProps {
  index: number;
  nature: string;
  eduOrExp: EduExpInterface;
  allEduExp: EduExpInterface[];
  setEduExp: React.Dispatch<React.SetStateAction<EduExpInterface[]>>;
  edit_delete: (i: number, type: string, eduExp?: EduExpInterface) => void;
}

export const EduExpItemComponent = ({
  index,
  eduOrExp,
  allEduExp,
  setEduExp,
  edit_delete,
  nature,
}: EduExpItemProps) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const divRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    console.log(divRef);
    divRef?.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const defineDate = (date: string) => {
    const converted = new Date(date);
    const month = converted.getMonth();
    const year = converted.getFullYear().toString().substring(1, 3);
    return months[month] + " " + year;
  };

  return (
    <>
      <motion.div
        className={`px-0 my-3 card position-relative ${
          isExpanded && "expanded"
        }`}
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
                <Button
                  className="dropdown-item d-flex align-items-center justify-content-start"
                  data-toggle="dropdown"
                  onClick={() => setShowEdit(true)}
                >
                  <PiNotePencilLight className="me-2 fs-4" />
                  <span>Edit education</span>
                </Button>
                <Button
                  className="dropdown-item d-flex align-items-center justify-content-start"
                  data-bs-toggle="dropdown"
                  onClick={() => {
                    setShowConfirmation(true);
                  }}
                >
                  <PiTrash className="me-2 fs-4" />
                  <span>Delete education</span>
                </Button>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="private-eduExp-subtitle mb-0">{eduOrExp.name}</h5>
            <span className="private-eduExp-dates">
              {defineDate(eduOrExp.from)} - {defineDate(eduOrExp.to)}
            </span>
          </div>
        </Card.Header>
        <Card.Body ref={divRef}>
          <p className="private-description-head mb-0">Description:</p>
          <p className="private-eduExp-description mb-1">
            {eduOrExp.description}
          </p>
        </Card.Body>
        <div
          className={`w-100 d-flex justify-content-center align-items-center py-1 d-md-none private-eduExp-expand ${
            isExpanded ? "on" : "off "
          }`}
          onClick={() => {
            isExpanded && onClick();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? (
            <PiArrowsInLineVerticalThin className={`fs-4 expand-icon`} />
          ) : (
            <PiArrowsOutLineVerticalThin className="fs-4 expand-icon" />
          )}
        </div>
      </motion.div>
      <EduExpEditModalComponent
        show={showEdit}
        onHide={() => setShowEdit(false)}
        nature={nature}
        index={index}
        eduOrExp={eduOrExp}
        edit_delete={edit_delete}
      />
      <ConfirmationModalComponent
        show={showConfirmation}
        onHide={() => setShowConfirmation(false)}
        nature="deletion"
        deletion={() => edit_delete(index, `del_${nature}`)}
      />
    </>
  );
};
