import { motion } from "framer-motion";
import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
  BiMobileAlt,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSessionStorage } from "../../../../hooks/useSessionStorage";
import data from "../../../../assets/content/Placeholder.json";

export const ContactsComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [infoAndContacts, setInfoAndContacts] = useSessionStorage(
    "info_contacts",
    data.info_contacts
  );

  return (
    <motion.div className="col col-12 col-sm-6 col-md-12 resume-contact-info mb-4">
      <h3 className="resume-section-title py-2 px-3">CONTACTS</h3>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiLogoGithub className="resume-icon" />
        </span>
        <Link
          to={infoAndContacts.github.url}
          target="_blank"
          className="resume-info-p m-0"
        >
          {infoAndContacts.github.username}
        </Link>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiLogoLinkedin className="resume-icon" />
        </span>
        <Link
          to={infoAndContacts.linkedin.url}
          target="_blank"
          className="resume-info-p m-0"
        >
          {infoAndContacts.linkedin.username}
        </Link>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiMobileAlt className="resume-icon" />
        </span>
        <Link
          to={"tel:" + infoAndContacts.mobile}
          className="resume-info-p m-0"
        >
          IT (+39){infoAndContacts.mobile}
        </Link>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiLogoGmail className="resume-icon" />
        </span>
        <Link
          to={"mailto:" + infoAndContacts.email}
          className="resume-info-p email m-0"
        >
          {infoAndContacts.email}
        </Link>
      </div>
    </motion.div>
  );
};
