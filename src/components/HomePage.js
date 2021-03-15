import React from "react";
import { useHistory } from "react-router-dom";

function HomePage(props) {
  //   const classNamees = useStyles();
  const history = useHistory();

  const goToContentPage = (e) => {
    e.preventDefault();
    history.push("/content");
  };

  return (
    <section className="jumbotron">
      <h1 className="display-4">Learning Cypress!</h1>
      <p className="lead">
        This is a super simple React App that showcases how to use Cypress for
        your E2E testing!
      </p>
      <hr className="my-4" />
      <p>
        It includes a <span className="page">forms page</span>,
        <span className="page">lists page</span>, and a
        <span className="page">network requests page</span>. Check out the
        GitHub project for more info.
      </p>
      <p className="lead">
        <button
          type="button"
          className="btn btn-primary"
          id="startButton"
          onClick={goToContentPage}
        >
          Start Here
        </button>
      </p>
    </section>
  );
}

export default HomePage;
