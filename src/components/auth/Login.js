import { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login }) => {
  const [userCategory, setUserCategory] = useState("passenger");
  const [userData, setUserData] = useState({});
  const [isFormDataValid, setFormDataValidation] = useState(false);

  useEffect(() => {
    const validateFormInput = () => {
      const { isPasswordValid, isEmailValid } = userData;
      if (!(isEmailValid && isPasswordValid)) {
        return setFormDataValidation(false);
      }

      setFormDataValidation(true);
    };
    console.log({ userData });
    validateFormInput();
  }, [userData]);

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
    login({ ...userData, userCategory });
  };

  return (
    <div id="login">
      <div className="wrapper">
        <form className="form">
          <h1>Welcome Back</h1>
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
            <div className="category">
              <div
                onClick={() => setUserCategory("admin")}
                className={`decorator ${
                  userCategory === "admin" ? "active" : ""
                }`}
              >
                <i className="fas fa-laptop-code"></i>
              </div>
              <p>Admin</p>
            </div>
          </div>
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
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

Login.prototype = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
