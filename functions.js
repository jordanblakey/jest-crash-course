const axios = require("axios");

const functions = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstName: "Jordan",
    };
    user["lastName"] = "Blakey";
    return user;
  },
  fetchUser: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => err);
  },
};

module.exports = functions;
