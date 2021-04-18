import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { register } from "../../actions/auth";

const Register = ({ register }) => {
  const [userCategory, setUserCategory] = useState("passenger");

  const [userData, setUserData] = useState({});

  const onUserNameChange = (userName) => {
    setUserData({ ...userData, userName });
  };

  const onEmailChange = (email) => {
    setUserData({ ...userData, email });
  };

  const onPasswordChange = (password) => {
    setUserData({ ...userData, password });
  };

  const onFormSubmit = async () => {
    register({ ...userData });
  };

  return (
    <div id="register">
      <div className="wrapper">
        <form className="form">
          <h1>Registeration Form</h1>
          <h2>Who you are?</h2>
          <div className="icons">
            <div className="category">
              <div
                onClick={() => setUserCategory("passenger")}
                className={`decorator ${
                  userCategory === "passenger" ? "active" : ""
                }`}
              >
                <i className="fas fa-user-alt"></i>
              </div>
              <p>Passenger</p>
            </div>
            <div className="category">
              <div
                onClick={() => setUserCategory("operator")}
                className={`decorator ${
                  userCategory === "operator" ? "active" : ""
                }`}
              >
                <i className="fas fa-user-cog"></i>
              </div>
              <p>Operator</p>
            </div>
          </div>
          <input
            onChange={(e) => {
              onUserNameChange(e.target.value);
            }}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => {
              onEmailChange(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <div className="password-input">
            <input
              onChange={(e) => {
                onPasswordChange(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
          </div>

          <button onClick={onFormSubmit} className="button" type="button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

Register.prototype = {
  register: PropTypes.func.isRequired,
};

export default connect(null, { register })(Register);
