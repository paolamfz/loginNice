import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SignUp from "./SignUp";
//import { getAll } from '../services/user';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = (props) => {
  const [reg, setReg] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    /* getAll().then(data=> {
      setUsers(data)
    })  */
  }, []);

  function cerrarSesion() {
    document.getElementById("caja-home").style.display = "none";
    document.getElementById("form-login").style.display = "block";
    document.getElementById("textusu").value = "";
    document.getElementById("textusu").value = "";
    document.getElementById("textusu").focus();
  }

  function op_registrar() {
    setReg("1");
  }

  return (
    <>
      <div id="caja_home" style={{ textAlign: "left" }}>
        <strong className="h3">
          Bienvenido Usuario :<div>{users.name}</div>
        </strong>

        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ marginTop: 20 }}
        >
          <div className="container-fluid">
            <label className="navbar-brand  h5" href=" ">
              Menú Principal
            </label>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="" className="nav-link  h5  text-center">
                  Registrar
                </NavLink>

                <a
                  className="nav-link  h5  text-center"
                  style={{ color: "blue" }}
                  href=" "
                  onClick={cerrarSesion}
                >
                  Cerrar Sesión
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {reg === "1" && <SignUp />}
    </>
  );
};
