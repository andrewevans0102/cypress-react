import React from "react";
import { useHistory } from "react-router-dom";

function ContentPage(props) {
  //   const classNamees = useStyles();
  const history = useHistory();

  const goToFormsPage = (e) => {
    e.preventDefault();
    history.push("/forms");
  };

  const goToListsPage = (e) => {
    e.preventDefault();
    history.push("/lists");
  };

  const goToNetworkRequestsPage = (e) => {
    e.preventDefault();
    history.push("/network-requests");
  };

  return (
    <div className="content">
      <div className="row">
        <div className="col">
          <h1>Learn Cypress</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary content-button"
            onClick={goToFormsPage}
            id="formsButton"
          >
            Forms
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary content-button"
            onClick={goToListsPage}
            id="listsButton"
          >
            Lists
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary content-button"
            onClick={goToNetworkRequestsPage}
            id="networkButton"
          >
            Network Requests
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
