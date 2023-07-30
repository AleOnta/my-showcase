import { Col } from "react-bootstrap";
import { EduExpInterface } from "../../../assets/interfaces/EduExpInterface";

interface eduExpProps {
  eduExp: EduExpInterface;
}

export const EduExpComponent = ({ eduExp }: eduExpProps) => {
  return (
    <Col xs={12} className="p-0 mb-4">
      <h4 className="edu-exp-main-title mb-0 text-uppercase">{eduExp.title}</h4>
      <h6 className="edu-exp-second-title mb-2">{eduExp.name}</h6>
      <p className="edu-exp-text">{eduExp.description}</p>
    </Col>
  );
};
