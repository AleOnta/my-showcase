import { motion } from "framer-motion";
import { BiCalendar, BiHomeAlt2, BiInfoCircle, BiUser } from "react-icons/bi";

export const PersonalInfoComponent = () => {
  return (
    <motion.div className="col col-12 col-sm-6 col-md-12 resume-personal-info mb-4">
      <h3 className="resume-section-title">PERSONAL INFO</h3>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiUser className="resume-icon" />
        </span>
        <p className="resume-info-p m-0">Alessandro Ontani</p>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiInfoCircle className="resume-icon" />
        </span>
        <p className="resume-info-p m-0">Jr Full-Stack Web Dev.</p>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiHomeAlt2 className="resume-icon" />
        </span>
        <p className="resume-info-p m-0">Milan, Italy - IT</p>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiCalendar className="resume-icon" />
        </span>
        <p className="resume-info-p m-0"> 24 yo. - 1999/01/11</p>
      </div>
    </motion.div>
  );
};
