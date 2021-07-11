import React from "react";
import videoBackground from "../assets/media/video_background.mp4";
import formsImage from "../assets/image/forms-background.svg";
import imageAvenida1 from "../assets/image/avenida-imagen-1@2x.png";
import imageAvenida2 from "../assets/image/avenida-imagen-2@2x.png";
import imageAvenida3 from "../assets/image/avenida-imagen-3@2x.png";
import imageAvenida4 from "../assets/image/avenida-imagen-4@2x.png";
import imageAvenida5 from "../assets/image/avenida-imagen-5@2x.png";
import imageAvenida6 from "../assets/image/avenida-imagen-6@2x.png";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import { textsMock } from "../utils/mock";
import Nav from "../components/Nav";
import { DataActionsContext } from "../context";
import EllipsisText from "react-ellipsis-text";
const Home = () => {
  const contextData = React.useContext(DataActionsContext);
  const dataItem = contextData.items && contextData.items.avenues;
  const langText =
    contextData.lang.es == true ? textsMock.text.es : textsMock.text.pt;
  const lang =
    contextData.lang.es == true ? textsMock.paths.es : textsMock.paths.pt;

  const totalIniciatives = () => {
    var total = 0;
    for (var i in dataItem) {
      total += dataItem[i].totalIniciatives;
    }
    return total;
  };
  const totalSubIniciatives = () => {
    var total = 0;
    for (var i in dataItem) {
      for (var b in dataItem[i].iniciatives) {
        total += dataItem[i].iniciatives[b].totalSubiniciatives;
      }
    }
    return total;
  };
  return (
    <>
      <header>
        <div className="fullscreen-video-wrap ">
          <video loop muted autoPlay className="fade-animate">
            <source src={videoBackground} type="video/mp4" />
          </video>
        </div>
        <Nav langIcon />
      </header>
      <div className=" main-container main-container__home-page">
        <div className="bkg-gradient">
          <div className="container">
            <Parallax
              className="image-forms-background"
              y={[0, -20]}
              tagOuter="figure"
            >
              <img src={formsImage} />
            </Parallax>
            <div className="content-title slide-animate-left">
              <>
                <h1>
                  Avenidas Estratégicas
                  <br />
                  de Sistemas
                </h1>
                <p>
                  {contextData.lang.es == true
                    ? "En este portal podrás encontrar toda la información correspondiente a las iniciativas."
                    : "Neste portal encontrará toda a informação correspondente às iniciativas."}
                </p>
                <ul className="d-flex">
                  <li className="d-flex">
                    <span>6</span>
                    <span>
                      avenidas
                      <br />
                      estratégicas
                    </span>
                  </li>
                  <li>
                    <span>{totalIniciatives()}</span>

                    <span>
                      iniciativas
                      <br />
                      claves
                    </span>
                  </li>
                  <li>
                    <span>{totalSubIniciatives()}</span>

                    <span>
                      sub-iniciativas
                      <br />
                      claves
                    </span>
                  </li>
                </ul>
              </>
            </div>

            <div className="row avenue-image-wrap">
              <div className="col-md-2">
                <Link to={lang.centricityConsumer.href}>
                  <div className="content-image-avenue">
                    <img src={imageAvenida1} />
                    <div className="content-title">
                      <h2>{langText.centricityConsumer.title}</h2>
                    </div>

                    <div className="content-title-hover">
                      <h2>{langText.centricityConsumer.title}</h2>
                      <p>
                        <EllipsisText
                          text={langText.centricityConsumer.description}
                          length={160}
                        />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-2">
                <Link to={lang.cybersecurity.href}>
                  <div className="content-image-avenue">
                    <img src={imageAvenida2} />
                    <div className="content-title">
                      <h2>{langText.cybersecurity.title}</h2>
                    </div>

                    <div className="content-title-hover">
                      <h2>{langText.cybersecurity.title}</h2>

                      <p>
                        <EllipsisText
                          text={langText.cybersecurity.description}
                          length={160}
                        />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-2">
                <Link to={lang.digitalStrategy.href}>
                  <div className="content-image-avenue">
                    <img src={imageAvenida3} />
                    <div className="content-title">
                      <h2>{langText.digitalStrategy.title}</h2>
                    </div>

                    <div className="content-title-hover">
                      <h2>{langText.digitalStrategy.title}</h2>
                      <p>
                        <EllipsisText
                          text={langText.digitalStrategy.description}
                          length={160}
                        />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-2">
                <Link to={lang.technologyStrategy.href}>
                  <div className="content-image-avenue">
                    <img src={imageAvenida4} />
                    <div className="content-title">
                      <h2>{langText.technologyStrategy.title}</h2>
                    </div>

                    <div className="content-title-hover">
                      <h2>{langText.technologyStrategy.title}</h2>

                      <p>
                        <EllipsisText
                          text={langText.technologyStrategy.description}
                          length={160}
                        />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-2">
                <Link to={lang.talentManagement.href}>
                  <div className="content-image-avenue">
                    <img src={imageAvenida5} />
                    <div className="content-title">
                      <h2>{langText.talentManagement.title}</h2>
                    </div>

                    <div className="content-title-hover">
                      <h2>{langText.talentManagement.title}</h2>

                      <p>
                        <EllipsisText
                          text={langText.talentManagement.description}
                          length={160}
                        />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-2">
                <Link to={lang.newITModel.href}>
                  <div className="content-image-avenue">
                    <img src={imageAvenida6} />
                    <div className="content-title">
                      <h2>{langText.newITModel.title}</h2>
                    </div>

                    <div className="content-title-hover">
                      <h2>{langText.newITModel.title}</h2>
                      <p>
                        <EllipsisText
                          text={langText.newITModel.description}
                          length={150}
                        />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <p>Cencosud | Gerencia de Sistemas</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
