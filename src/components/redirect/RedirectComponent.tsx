import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const RedirectComponent = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    location === "/" && navigate("/homepage");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <></>
    </>
  );
};
