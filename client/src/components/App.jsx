import React from "react";
import Headers from "./Headers";
import CreateStream from "./streams/CreateStream";
import RetrieveStream from "./streams/RetrieveStream";
import UpdateStream from "./streams/UpdateStream";
import DeleteStream from "./streams/DeleteStream";
import StreamList from "./streams/StreamList";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Headers />
      <Route path={"/streams/new"} exact component={CreateStream} />
      <Route path={"/streams/show"} exact component={RetrieveStream} />
      <Route path={"/streams/edit"} exact component={UpdateStream} />
      <Route path={"/streams/delete"} exact component={DeleteStream} />
      <Route path={"/"} exact component={StreamList} />
    </BrowserRouter>
  </div>
);

export default App;
