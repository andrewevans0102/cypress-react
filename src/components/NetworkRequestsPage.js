import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function NetworkRequestsPage(props) {
  const history = useHistory();
  const [selectedMovie, setSelectedMovie] = useState("1");
  const [movieDetails, setMovieDetails] = useState({});

  const goToContentPage = (e) => {
    e.preventDefault();
    history.push("/content");
  };

  const changeMovie = (e) => {
    e.preventDefault();
    setSelectedMovie(e.currentTarget.value);
  };

  useEffect(() => {
    async function getDetails() {
      const response = await axios.get(
        `https://swapi.dev/api/films/${selectedMovie}/`
      );
      setMovieDetails(response.data);
    }
    getDetails();
  }, [selectedMovie]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-4">Network Request Page</h1>
          <p className="lead">
            Show how cypress handles network requests by calling the
            <a href="https://swapi.dev/">Star Wars API</a>!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="movie-form">
            <form>
              <div className="form-group">
                <label>Select Movie</label>
                <select
                  className="form-control"
                  id="movieSelect"
                  onChange={changeMovie}
                >
                  <option value="1">A New Hope (1)</option>
                  <option value="2">The Empire Strikes Back (2)</option>
                  <option value="3">Return of the Jedi (3)</option>
                </select>
              </div>
              <div className="details-button">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={goToContentPage}
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        {movieDetails !== {} && (
          <div className="col">
            <div className="list-group show-movie">
              <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Movie Title</h5>
                </div>
                <p className="mb-1" id="movieTitle">
                  {movieDetails.title}
                </p>
              </div>
              <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Episode</h5>
                </div>
                <p className="mb-1" id="episodeNumber">
                  {movieDetails.episode_id}
                </p>
              </div>
              <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Movie Intro</h5>
                </div>
                <p className="mb-1">{movieDetails.opening_crawl}</p>
              </div>
              <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Director</h5>
                </div>
                <p className="mb-1">{movieDetails.director}</p>
              </div>
              <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Producer</h5>
                </div>
                <p className="mb-1">{movieDetails.producer}</p>
              </div>
              <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Release Date</h5>
                </div>
                <p className="mb-1">{movieDetails.release_date}</p>
              </div>
            </div>
          </div>
        )}
        )
      </div>
    </div>
  );
}

export default NetworkRequestsPage;
