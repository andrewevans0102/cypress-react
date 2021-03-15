import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function ListsPage(props) {
  const [listValues, setListValues] = useState([
    "first item",
    "second item",
    "third item",
    "fourth item",
  ]);
  const [createValue, setCreateValue] = useState("");
  const history = useHistory();

  const goToContentPage = (e) => {
    e.preventDefault();
    history.push("/content");
  };

  const inputValue = (e) => {
    e.preventDefault();
    setCreateValue(e.target.value);
  };

  const deleteValue = (value) => {
    const newValues = listValues.filter((listValue) => listValue !== value);
    setListValues(newValues);
  };

  const addValueToList = (e) => {
    e.preventDefault();
    setListValues([...listValues, createValue]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-4">List Page</h1>
          <p className="lead">Show how cypress handles lists!</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="create-form">
            <form className="form-inline">
              <div className="form-group">
                <input
                  className="form-control"
                  id="createInput"
                  placeholder="Value"
                  onChange={inputValue}
                  name="createValue"
                />
              </div>
              <div className="create-button">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={addValueToList}
                  id="createButton"
                >
                  create value
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="list-content">
            {/* https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements */}
            <ul className="list-group" data-cy="listValues">
              {listValues &&
                listValues.map((value) => (
                  <li className="list-group-item" key={value}>
                    <div className="value">{value}</div>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteValue(value)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="back-button">
            <button
              type="button"
              className="btn btn-danger"
              onClick={goToContentPage}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListsPage;
