import React from "react";
import { Divide as Hamburger } from "hamburger-react";
import iconLenguaje from "../assets/image/icon-lenguaje.svg";
import logo from "../assets/image/logo.svg";
import { Link } from "react-router-dom";
import { DataActionsContext } from "../context";
import { textsMock } from "../utils/mock";
const Nav = (props) => {
  const contextData = React.useContext(DataActionsContext);
  const [isOpen, setOpen] = React.useState(false);
  const lang =
    contextData.lang.es == true ? textsMock.paths.es : textsMock.paths.pt;
  const handleEs = () => {
    contextData.setLang({ es: true, pt: false });
    contextData.setLangItem("es");
  };
  const handlePt = () => {
    contextData.setLang({ es: false, pt: true });
    contextData.setLangItem("pt");
  };
  return (
    <>
      <div className="top-bar slide-animate-top" style={{ zIndex: 30 }}>
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/">
            <img src={logo} className="logo-image" />
          </Link>
          <div className="right-wrap d-flex justify-content-between ">
            {props.langIcon && (
              <>
                <div className="d-flex justify-content-between ">
                  <img src={iconLenguaje} />
                  <ul className="d-flex justify-content-between align-items-center lenguage-item">
                    <li
                      className={contextData.lang.es == true ? "active" : null}
                    >
                      <a onClick={handleEs}>Esp </a>
                    </li>
                    <li>-</li>
                    <li
                      className={contextData.lang.pt == true ? "active" : null}
                    >
                      <a onClick={handlePt}>Por</a>
                    </li>
                  </ul>
                </div>
              </>
            )}
            <Hamburger
              rounded
              easing="ease-in"
              duration={0.3}
              size={25}
              size={25}
              toggled={isOpen}
              toggle={setOpen}
            />
            {isOpen ? (
              <div className="menu-toogle">
                <ul>
                  <li
                    className={
                      props.active === "customer-centricity" ? "active" : null
                    }
                  >
                    <Link to={"./" + lang.centricityConsumer.href}>
                      {lang.centricityConsumer.id}
                    </Link>
                  </li>
                  <li
                    className={
                      props.active === "cyberseguridad-compliance"
                        ? "active"
                        : null
                    }
                  >
                    <Link to={"./" + lang.cybersecurity.href}>
                      {lang.cybersecurity.id}
                    </Link>
                  </li>
                  <li
                    className={
                      props.active === "estrategia-digital" ? "active" : null
                    }
                  >
                    <Link to={"./" + lang.digitalStrategy.href}>
                      {lang.digitalStrategy.id}
                    </Link>
                  </li>
                  <li
                    className={
                      props.active === "estrategia-tecnologica"
                        ? "active"
                        : null
                    }
                  >
                    <Link to={"./" + lang.technologyStrategy.href}>
                      {lang.technologyStrategy.id}
                    </Link>
                  </li>
                  <li
                    className={
                      props.active === "gestion-de-talento" ? "active" : null
                    }
                  >
                    <Link to={"./" + lang.talentManagement.href}>
                      {lang.talentManagement.id}
                    </Link>
                  </li>
                  <li
                    className={
                      props.active === "nuevo-modelo-ti" ? "active" : null
                    }
                  >
                    <Link to={"./" + lang.newITModel.href}>
                      {lang.newITModel.id}
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
