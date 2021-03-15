import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function FormsPage(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToContentPage = (e) => {
    e.preventDefault();
    history.push("/content");
  };

  const inputEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const inputPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("please enter a email");
      return;
    }
    if (password === "") {
      alert("please enter a password");
      return;
    }

    alert(
      `successfully entered input with email ${email} and password ${password}`
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-4">Forms Page</h1>
          <p className="lead">Show how cypress handles a login form!</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={inputEmail}
                name="email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={inputPassword}
                name="password"
              />
            </div>
          </form>
          <div className="login-button">
            <button
              type="button"
              className="btn btn-danger"
              onClick={goToContentPage}
              id="backButton"
            >
              Back
            </button>
            <button
              className="btn btn-primary"
              onClick={onSubmit}
              id="submitButton"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormsPage;
