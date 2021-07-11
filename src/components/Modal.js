import React from "react";
import iconClose from "../assets/image/icon-close.svg";
import imageItem from "../assets/image/imagen_predeterminada.png";
import file from "../assets/image/file-txt.svg";
import { DataActionsContext } from "../context";
const Modal = (props) => {
  const contextData = React.useContext(DataActionsContext);
  return (
    <>
      <div
        className={
          props.active ? "overlay-background active" : "overlay-background"
        }
      >
        <div className="modal-content ">
          <img src={iconClose} className="icon-close" onClick={props.onClose} />
          <h1>{props.name}</h1>
          <p className="mb-4">{props.description}</p>
          <div className="row">
            <div className="col-md-5">
              <img
                src={
                  props.image ? contextData.filePath + props.image : imageItem
                }
              />
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-8">
                  <div className="cont-text-right mt-4">
                    <p>
                      <b>
                        {contextData.langItem == "es"
                          ? "Unidad de Negocio:"
                          : "Unidade de negócio:"}{" "}
                      </b>
                      {props.businessUnitSubItem}
                    </p>
                    <p>
                      <b>{contextData.langItem == "es" ? "País:" : "País:"} </b>
                      {props.countryItem}
                    </p>
                    <p>
                      <b>
                        {contextData.langItem == "es"
                          ? "Bandera:"
                          : "Bandeira:"}{" "}
                      </b>
                      {props.flagSub}
                    </p>
                    <p>
                      <b>
                        {contextData.langItem == "es" ? "Estado: " : "Estado: "}{" "}
                      </b>
                      {props.stateSub}
                    </p>
                    <p>
                      <b>
                        {contextData.langItem == "es"
                          ? "Responsable: "
                          : "Chefe da sub-iniciativa: "}{" "}
                      </b>
                      {props.responsableItem}
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  {props.file && props.file.length != 0 && (
                    <p className="mt-4">
                      <b>
                        {contextData.langItem == "es"
                          ? "Archivos disponibles:"
                          : "Arquivos disponíveis:"}{" "}
                      </b>
                    </p>
                  )}
                  <div className="row">
                    {props.file &&
                      props.file.map((item, index) => {
                        return (
                          <>
                            <div className="col-md-2 mb-1" key={index}>
                              <a
                                href={item.path}
                                download
                                title={item.extension}
                              >
                                <img src={file} />
                              </a>
                              {/* <span className="mt-2">{item.extension}</span> */}
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              {props.url && (
                <a href={props.url} target="_blank">
                  <button className="mt-2">
                    {contextData.langItem == "es"
                      ? "Conozca la Iniciativa"
                      : "Conheça a Iniciativa"}{" "}
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
