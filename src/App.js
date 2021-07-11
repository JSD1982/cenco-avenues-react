import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataActionsContext } from "./context";
import LoadingImage from "./assets/image/loading.gif";
import { textsMock } from "./utils/mock";
import {
  Home,
  CustomerCentricity,
  CyberseguridadCompliance,
  EstrategiaDigital,
  EstrategiaTecnologica,
  GestionTalento,
  NuevoModeloTi,
} from "./pages";

function App() {
  const contextData = React.useContext(DataActionsContext);
  const lang =
    contextData.lang.es == true ? textsMock.paths.es : textsMock.paths.pt;
  return (
    <>
      <Router>
        {contextData.loading ? (
          <div className="content-loading">
            <img src={LoadingImage} className="loading-image" />
          </div>
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path={"/" + lang.centricityConsumer.href}>
              <CustomerCentricity />
            </Route>
            <Route path={"/" + lang.cybersecurity.href}>
              <CyberseguridadCompliance />
            </Route>
            <Route path={"/" + lang.digitalStrategy.href}>
              <EstrategiaDigital />
            </Route>
            <Route path={"/" + lang.technologyStrategy.href}>
              <EstrategiaTecnologica />
            </Route>
            <Route path={"/" + lang.talentManagement.href}>
              <GestionTalento />
            </Route>
            <Route path={"/" + lang.newITModel.href}>
              <NuevoModeloTi />
            </Route>
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
