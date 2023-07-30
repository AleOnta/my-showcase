import { Col } from "react-bootstrap";

interface EduExpProps {
  title: string;
  name: string;
  description: string;
}

export const EduExpComponent = () => {
  return (
    <Col xs={12} className="p-0 mb-4">
      <h4 className="edu-exp-main-title mb-0 text-uppercase">EPICODE SCHOOL</h4>
      <h6 className="edu-exp-second-title mb-2">
        Junior Full-Stack Web Developer Bootcamp
      </h6>
      <p className="edu-exp-text">
        The epicode bootcamp to become Junior Full-Stack Developers lasts for 6
        months. The first 3 months are entirely dedicated to the study of
        front-end development, starting from the bases such as HTML & CSS, and
        then moving on to the programming in Javascript and Typescript,
        deepening frameworks such as Bootstrap and React JS. The next two
        months, they are dedicated to back-end development, and to the creation
        of Rest API in Java Spring. All are made on relational databases in
        PostgreSQL and manipulated via ORM such as hibernate. The final month is
        entirely dedicated to the construction of a full-stack project.
      </p>
    </Col>
  );
};
