import React from "react";
import Headers from "./Headers";
import CreateStream from "./streams/CreateStream";
import RetrieveStream from "./streams/RetrieveStream";
import UpdateStream from "./streams/UpdateStream";
import DeleteStream from "./streams/DeleteStream";
import StreamList from "./streams/StreamList";
import { Router, Route } from "react-router-dom";
import history from "../history";

const App = () => (
  <div className="container">
    <Router history={history}>
      <Headers />
      <Route path={"/streams/new"} exact component={CreateStream} />
      <Route path={"/streams/show/:id"} exact component={RetrieveStream} />
      <Route path={"/streams/edit/:id"} exact component={UpdateStream} />
      <Route path={"/streams/delete/:id"} exact component={DeleteStream} />
      <Route path={"/"} exact component={StreamList} />
    </Router>
  </div>
);

export default App;
