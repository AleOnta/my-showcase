import { Row } from "react-bootstrap";
import {
  SiCss3,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaBootstrap, FaJava, FaSass } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SingleStackComponent } from "./SingleStackComponent";

export const TechStackComponent = () => {
  return (
    <>
      <Row className="m-0 icon-stack-row pt-3">
        <SingleStackComponent icon={<SiHtml5 />} name="HTML5" />
        <SingleStackComponent icon={<SiCss3 />} name="CSS3" />
        <SingleStackComponent icon={<SiJavascript />} name="JavaScript" />
        <SingleStackComponent icon={<SiTypescript />} name="TypeScript" />
      </Row>
      <Row className="m-0 icon-stack-row">
        <SingleStackComponent icon={<FaSass />} name="Sass" />
        <SingleStackComponent icon={<FaBootstrap />} name="Bootstrap" />
        <SingleStackComponent icon={<SiReact />} name="React JS" />
        <SingleStackComponent icon={<SiTailwindcss />} name="TailwindCSS" />
      </Row>
      <Row className="m-0 icon-stack-row pb-2">
        <SingleStackComponent icon={<FaJava />} name="Java" />
        <SingleStackComponent icon={<SiSpring />} name="Spring" />
        <SingleStackComponent icon={<SiHibernate />} name="Hibernate" />
        <SingleStackComponent icon={<BiLogoPostgresql />} name="PostgreSQL" />
      </Row>
    </>
  );
};
