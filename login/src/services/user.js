const API_URL = "http://localhost:8090/Api";

export const login = async (data) => {
  let res = await fetch(`${API_URL}/Auth`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
    })
    .catch((error) => {
      console.error("Error:", error);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    });
  console.log(res);
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
    .then((response) => console.log("Successfull"))
    .catch((error) => console.error("Error:", error));
};

/* export const getAll = () =>
  fetch(`http://localhost:8090/Api/users`, { method: "GET", headers })
    .then((res) => res.json())
    .then((data) => data); */
