import React from "react";
import { Route, Switch } from "react-router-dom";

import DocumentMeta from "react-document-meta";

// Pages
// import Equipment from "../Equipment";
import Calculator from "../../pages/Calculator";
import Stats from "../../pages/Stats";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";

// Components
import Header from "../Header";
import Footer from "../Footer";

// Stylesheets
import mainStyles from "./Main.css";

const App = () => {
  const meta = {
    title: "OSRSTools",
    description:
      "OSRSTools is a website entirely devoted to Oldschool Runescape with the intent of providing great tools such as XP calculators and stats viewers",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "osrstools, oldschool runescape tools, xp calculator"
      }
    }
  };
  return (
    <DocumentMeta {...meta}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2" />
          <div className="col-8">
            <Header />
            <Main />
            <Footer />
          </div>
          <div className="col-2" />
        </div>
      </div>
    </DocumentMeta>
  );
};

const Main = () => (
  <div className={"container-fluid " + mainStyles.mainContainer}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      {/* <Route path="/equipment" component={Equipment} /> */}
      <Route path="/calculator" component={Calculator} />
      <Route path="/stats" component={Stats} />
    </Switch>
  </div>
);

export default App;
