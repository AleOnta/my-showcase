import { Badge, Col } from "react-bootstrap";
import { EduExpInterface } from "../../../assets/interfaces/EduExpInterface";

interface eduExpProps {
  eduExp: EduExpInterface;
}

export const EduExpComponent = ({ eduExp }: eduExpProps) => {
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

  const defineDate = (date: string) => {
    const converted = new Date(date);
    const month = converted.getMonth();
    const year = converted.getFullYear().toString().substring(1, 3);
    return months[month] + " " + year;
  };

  return (
    <Col xs={12} className="p-0 mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="edu-exp-main-title mb-0 text-uppercase">
          {eduExp.title}
        </h4>
        <Badge className="me-xl-2 edu-exp-from-date ">
          {defineDate(eduExp.from)}
        </Badge>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="edu-exp-second-title mb-2">{eduExp.name}</h6>
        <Badge className="me-xl-2 edu-exp-to-date align-self-start">
          {defineDate(eduExp.to)}
        </Badge>
      </div>
      <p className="edu-exp-text">{eduExp.description}</p>
    </Col>
  );
};
