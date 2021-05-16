import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const NavBar = ({ isAuthenticated, logout, userCategory }) => {
  return (
    <div className="nav-bar">
      <div className="left">
        <NavLink exact to="/">
          <h1>bitRable Bus Booking</h1>
        </NavLink>
      </div>
      <div className="right">
        {!isAuthenticated && <NavLink to="/register">Sign Up</NavLink>}
        {!isAuthenticated && <NavLink to="/login">Sign In</NavLink>}
        {isAuthenticated && userCategory === "operator" && (
          <NavLink activeClassName="active" to="/schedule">
            Schedule
          </NavLink>
        )}
        {isAuthenticated && userCategory === "operator" && (
          <NavLink activeClassName="active" to="/bustype">
            Bus types
          </NavLink>
        )}
        {isAuthenticated && userCategory === "operator" && (
          <NavLink activeClassName="active" to="/busroute">
            Bus routes
          </NavLink>
        )}
        {isAuthenticated && userCategory === "passenger" && (
          <NavLink activeClassName="active" to="/search">
            Search
          </NavLink>
        )}
        {isAuthenticated && (
          <button
            onClick={() => {
              logout();
            }}
            className="button"
          >
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

NavBar.prototype = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  userCategory: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  userCategory: state.auth.userCategory,
});

export default connect(mapStateToProps, { logout })(NavBar);
