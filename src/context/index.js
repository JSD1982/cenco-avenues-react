import React from "react";
import { textsMock } from "../utils/mock";
import {apiRoute, apiFilePath} from '../config/httpConfig'
export const DataActionsContext = React.createContext();

const DataActionsContextTag = ({ children }) => {
  const [itemMock, setItemMock] = React.useState(textsMock);
  const [items, setItems] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [lang, setLang] = React.useState({ es: true, pt: false });
  const [langItem, setLangItem] = React.useState("es");
  const [iniciativesIndex, setIniciativesIndex] = React.useState(0);
  const [subiniciativesIndex, setSubiniciativesIndex] = React.useState(0);
  const [filePath, setFilePath] = React.useState(
    apiFilePath.apiPath
  );
  console.log('api', apiRoute)
  React.useEffect(() => {
    setLoading(true);
    fetch(apiRoute.apiPath)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setItems(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("items", langItem);
  return (
    <DataActionsContext.Provider
      value={{
        items,
        lang,
        setLang,
        itemMock,
        loading,
        langItem,
        setLangItem,
        iniciativesIndex,
        setIniciativesIndex,
        subiniciativesIndex,
        setSubiniciativesIndex,
        filePath,
      }}
    >
      {children}
    </DataActionsContext.Provider>
  );
};

export default DataActionsContextTag;
