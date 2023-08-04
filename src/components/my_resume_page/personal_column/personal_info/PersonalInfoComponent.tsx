import { motion } from "framer-motion";
import { BiCalendar, BiHomeAlt2, BiInfoCircle, BiUser } from "react-icons/bi";
import data from "../../../../assets/content/Placeholder.json";
import { useSessionStorage } from "../../../../hooks/useSessionStorage";

export const PersonalInfoComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [infoAndContacts, setInfoAndContacts] = useSessionStorage(
    "info_contacts",
    data.info_contacts
  );

  return (
    <motion.div className="col col-12 col-sm-6 col-md-12 resume-personal-info mb-4">
      <h3 className="resume-section-title py-2 px-3">PERSONAL INFO</h3>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiUser className="resume-icon" />
        </span>
        <p className="resume-info-p m-0">{infoAndContacts.fullname}</p>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiInfoCircle className="resume-icon" />
        </span>
        <p className="resume-info-p m-0">{infoAndContacts.job}</p>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiHomeAlt2 className="resume-icon" />
        </span>
        <p className="resume-info-p m-0">{infoAndContacts.location}</p>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiCalendar className="resume-icon" />
        </span>
        <p className="resume-info-p m-0">
          24 yo. / {infoAndContacts.birthdate}
        </p>
      </div>
    </motion.div>
  );
};
