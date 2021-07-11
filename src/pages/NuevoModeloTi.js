import React from "react";
import { Nav, IconScrollUp, Modal } from "../components";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import formsImage from "../assets/image/forms-background.svg";
import imageItem from "../assets/image/imagen_predeterminada.png";
import { DataActionsContext } from "../context";
import { textsMock } from "../utils/mock";
const NuevoModeloTi = () => {
  const contextData = React.useContext(DataActionsContext);
  const dataItem = contextData.items && contextData.items.avenues[4];
  const [actionItem, setActionItem] = React.useState(false);
  const [modalDataIni, setModalDataIni] = React.useState({ url: "", file: "" });
  const [modalData, setModalData] = React.useState({
    name: "",
    description: "",
    image: "",
    country: "",
    flag: "",
    businessUnit: "",
    state: "",
    responsable: "",
  });
  let imageList = [];
  let imageAllList = [];
  console.log("indexItem", modalData, modalDataIni);
  const langText =
    contextData.lang.es == true ? textsMock.text.es : textsMock.text.pt;
  React.useEffect(() => {
    contextData.setIniciativesIndex(null);
    const body = document.querySelector("#root");
    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);
  const handleItemIniciative = (item) => {
    setModalDataIni({ url: item.url, file: item.files });
  };
  const handleItem = (item, image) => {
    setActionItem(true);

    if (contextData.langItem == "es") {
      setModalData({
        name: item.language.es.name,
        description: item.language.es.description,
        image: image,
        country: item.language.es.country,
        flag: item.language.es.flag,
        businessUnit: item.language.es.businessUnit,
        state: item.language.es.state,
        responsable: item.language.es.responsable,
      });
    } else {
      setModalData({
        name: item.language.pt.name,
        description: item.language.pt.description,
        image: image,
        country: item.language.pt.country,
        flag: item.language.pt.flag,
        businessUnit: item.language.pt.businessUnit,
        state: item.language.pt.state,
        responsable: item.language.pt.responsable,
      });
    }
  };
  const handleCloseModal = () => {
    setActionItem(false);
    setModalData({});
  };
  return (
    <>
      <header className="backgraund-header bkg-modelo-ti fade-animate">
        <Nav active="nuevo-modelo-ti" />
        <div className="container">
          <Parallax
            className="image-forms-background"
            y={[-20, 10]}
            tagOuter="figure"
          >
            <img src={formsImage} />
          </Parallax>
        </div>
        <div className="container" style={{ zIndex: 20 }}>
          <div className="bread-crumb  d-flex justify-content-between">
            <ul className="d-flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li> / </li>
              <li>{langText.newITModel.title}</li>
            </ul>
            <Link to="/">
              <span></span>
              {contextData.langItem == "es" ? "Volver" : "Voltar"}
            </Link>
          </div>
        </div>
        <div className="container">
          <Parallax
            className="image-forms-background"
            y={[15, -30]}
            tagOuter="figure"
          >
            <div className="title-container-internal slide-animate-left">
              <h1>{langText.newITModel.title}</h1>
              <p>{langText.newITModel.description}</p>
            </div>
          </Parallax>
        </div>
      </header>
      <div className="container main-internal-container">
        <div className="iniciative-menu">
          <ul className="d-flex">
            <li
              className={contextData.iniciativesIndex == null && "active"}
              onClick={() => contextData.setIniciativesIndex(null)}
            >
              Todos
            </li>
            {dataItem.iniciatives.map((item, index) => {
              return (
                <>
                  {item.subIniciatives.length === 0 ? null : (
                    <li
                      className={
                        contextData.iniciativesIndex == index ? "active" : ""
                      }
                      key={index}
                      onClick={() => contextData.setIniciativesIndex(index)}
                    >
                      {contextData.langItem == "es"
                        ? item.language.es.name
                        : item.language.pt.name}
                    </li>
                  )}
                </>
              );
            })}
          </ul>
        </div>
        {contextData.iniciativesIndex != null ? (
          <>
            {contextData.langItem == "es" ? (
              <div className="title-iniciative fade-animate">
                <h2>
                  {
                    dataItem.iniciatives[contextData.iniciativesIndex].language
                      .es.name
                  }
                </h2>
                <p>
                  {
                    dataItem.iniciatives[contextData.iniciativesIndex].language
                      .es.description
                  }
                </p>
              </div>
            ) : (
              <div className="title-iniciative fade-animate">
                <h2>
                  {
                    dataItem.iniciatives[contextData.iniciativesIndex].language
                      .pt.name
                  }
                </h2>
                <p>
                  {
                    dataItem.iniciatives[contextData.iniciativesIndex].language
                      .pt.description
                  }
                </p>
              </div>
            )}

            <div className="row image-item-container fade-animate">
              {dataItem.iniciatives[
                contextData.iniciativesIndex
              ].subIniciatives.map((item, indexSub) => {
                {
                  imageList = [];
                }
                return (
                  <div
                    onClick={() => handleItemIniciative(item)}
                    className="col-md-3"
                  >
                    {dataItem.iniciatives[contextData.iniciativesIndex]
                      .subIniciatives[indexSub].files.length != 0 ? (
                      <>
                        {dataItem.iniciatives[
                          contextData.iniciativesIndex
                        ].subIniciatives[indexSub].files.map(
                          (itemPath, index) => {
                            return itemPath.extension == "image/jpeg" ||
                              itemPath.extension == "image/png" ||
                              itemPath.extension == "image/jpg" ? (
                              <div style={{ display: "none" }}>
                                {imageList.push(itemPath.path)}
                              </div>
                            ) : null;
                          }
                        )}
                        {imageList.length != 0 ? (
                          <>
                            {imageList.map((path, indexPath) => {
                              return (
                                indexPath == 0 && (
                                  <div onClick={() => handleItem(item, path)}>
                                    <img src={contextData.filePath + path} />
                                  </div>
                                )
                              );
                            })}
                          </>
                        ) : (
                          <div onClick={() => handleItem(item)}>
                            <img src={imageItem} />
                          </div>
                        )}
                      </>
                    ) : (
                      <div onClick={() => handleItem(item)}>
                        <img src={imageItem} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="row mb-5 image-item-container fade-animate">
            {dataItem.iniciatives.map((item, indexIni) => {
              return (
                <>
                  {dataItem.iniciatives[indexIni].subIniciatives.map(
                    (item, indexSub) => {
                      {
                        imageAllList = [];
                      }
                      return (
                        <div
                          onClick={() => handleItemIniciative(item)}
                          className="col-md-3"
                        >
                          {dataItem.iniciatives[indexIni].subIniciatives[
                            indexSub
                          ].files.length != 0 ? (
                            <>
                              {dataItem.iniciatives[indexIni].subIniciatives[
                                indexSub
                              ].files.map((itemPath, index) => {
                                return itemPath.extension == "image/jpeg" ||
                                  itemPath.extension == "image/png" ||
                                  itemPath.extension == "image/jpg" ? (
                                  <div style={{ display: "none" }}>
                                    {imageAllList.push(itemPath.path)}
                                    {console.log("imageAll", imageAllList)}
                                  </div>
                                ) : null;
                              })}

                              {imageAllList.length != 0 ? (
                                <>
                                  {imageAllList.map((path, indexPath) => {
                                    return (
                                      indexPath == 0 && (
                                        <div
                                          onClick={() => handleItem(item, path)}
                                        >
                                          <img
                                            src={contextData.filePath + path}
                                          />
                                        </div>
                                      )
                                    );
                                  })}
                                </>
                              ) : (
                                <div onClick={() => handleItem(item)}>
                                  <img src={imageItem} />
                                </div>
                              )}
                            </>
                          ) : (
                            <div onClick={() => handleItem(item)}>
                              <img src={imageItem} />
                            </div>
                          )}
                        </div>
                      );
                    }
                  )}
                </>
              );
            })}
          </div>
        )}
        <div className="social-item ">
          <p>
            Seguí todas nuestras Iniciativas en <a href="#">Linkedin</a>
          </p>
        </div>
      </div>
      <IconScrollUp />
      <footer className="internal-footer">
        <div className="container">
          <p>Cencosud | Gerencia de Sistemas</p>
        </div>
      </footer>
      <Modal
        active={actionItem}
        onClose={handleCloseModal}
        name={modalData.name}
        description={modalData.description}
        url={modalDataIni.url}
        file={modalDataIni.file}
        countryItem={modalData.country}
        businessUnitSubItem={modalData.businessUnit}
        flagSub={modalData.flag}
        stateSub={modalData.state}
        responsableItem={modalData.responsable}
        image={modalData.image}
      />
    </>
  );
};

export default NuevoModeloTi;
