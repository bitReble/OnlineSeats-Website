import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";

import { register } from "../../actions/auth";
import { Redirect } from "react-router";

const Register = ({ register, isAuthenticated }) => {
  const [userCategory, setUserCategory] = useState("passenger");
  const [userData, setUserData] = useState({});
  const [isFormDataValid, setFormDataValidation] = useState(false);

  useEffect(() => {
    const validateFormInput = () => {
      const { isUserNameValid, isPasswordValid, isEmailValid } = userData;
      if (!(isEmailValid && isPasswordValid && isUserNameValid)) {
        return setFormDataValidation(false);
      }

      setFormDataValidation(true);
    };
    validateFormInput();
  }, [userData]);

  const onUserNameChange = (userName) => {
    let isUserNameValid = false;
    if (userName) {
      isUserNameValid = true;
    }
    setUserData({ ...userData, userName, isUserNameValid });
  };

  const onEmailChange = (email) => {
    let isEmailValid = false;
    if (email) {
      isEmailValid = true;
    }
    setUserData({ ...userData, email, isEmailValid });
  };

  const onPasswordChange = (password) => {
    let isPasswordValid = false;
    if (password) {
      isPasswordValid = true;
    }
    setUserData({ ...userData, password, isPasswordValid });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    register({ ...userData, userCategory });
  };

  if (isAuthenticated) {
    return <Redirect to="/busroute"></Redirect>;
  }

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
          <button
            disabled={!isFormDataValid}
            className={`button ${isFormDataValid ? "" : "disabled"}`}
            onClick={onFormSubmit}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

Register.prototype = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
