import React, { useState } from "react";
import {Home} from './Home'

export const Login = () => {
  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value; //Captura el texto que esta dentro de la caja usuario
    var txtpas = document.getElementById("txtpas").value; //Captura el texto que esta dentro de la caja password
    if (txtusu.length === 0 || txtpas.length === 0) {
      alert("COMPLETE LOS DATOS FALTANTES");
    } else {
      if (usu === "admin" && pas === "123456") {
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      } else {
        setMiLogin("false");
        alert("Error de usuario o/y contraseña");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtpas").focus();
      }
    }
  }

  return (
    <div
      className="container"
      style={{ background: "lightblue", marginTop: 20, padding: 20 }}
    >
      <div>
        <form id="form_login">
          <div>
            <h1 style={{ color: "blue", textalign: "center" }}>Welcome!</h1>
            <label htmlFor="txtusu">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              id="txtusu"
              style={{ textAlign: "center" }}
              className="form-control"
              onChange={(e) => setUsu(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="txtpas">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="txtpas"
              style={{ textAlign: "center" }}
              className="form-control"
              onChange={(e) => setPas(e.target.value)}
              required
            />
          </div>
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            value="Login"
            onClick={iniciarSesion}
          />
        </form>

        {miLogin === "true" && <Home usu={usu} />}

      </div>

    </div>
  );
};
