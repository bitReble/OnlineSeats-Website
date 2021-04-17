import { useState } from "react";

const Login = () => {
  const [userCategory, setUserCategory] = useState("passenger");

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
          <input type="email" placeholder="Email" />
          <div className="password-input">
            <input type="password" placeholder="Password" />
          </div>

          <button className="button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
