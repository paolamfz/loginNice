import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = (props) => {
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  const exit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">App</span>
          <div
            onClick={exit}
            className="nav-item"
            style={{ color: "#fff", cursor: "pointer" }}
          >
            Exit
          </div>
        </div>
      </nav>
      <div class="jumbotron">
        <h1 class="display-3">Welcome {user.name}!</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </>
  );
};
