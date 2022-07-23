const API_URL = "http://localhost:8090/Api";

export const login = (data) => {
  fetch(`${API_URL}/Auth`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => console.log(response))
    .catch((error) => console.error("Error:", error));
};

export const signup = (data) => {
  fetch(`${API_URL}/users/createUser`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => localStorage.setItem("token", "estevaser un token"))
    .catch((error) => console.error("Error:", error));
};

/* export const getAll = () =>
  fetch(`http://localhost:8090/Api/users`, { method: "GET", headers })
    .then((res) => res.json())
    .then((data) => data); */
