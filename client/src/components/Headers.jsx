import React from "react";
import GoogleAuth from "./GoogleAuth";

import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Streamy
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/streams/show">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link active" to="/">
              <GoogleAuth />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Headers;
