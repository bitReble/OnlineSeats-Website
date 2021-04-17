import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorizaition"] = `Bearer: ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorizaition"];
  }
};

export default setAuthToken;
