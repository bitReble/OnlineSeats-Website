import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const NavBar = ({ isAuthenticated, logout, userCategory }) => {
  return (
    <div className="nav-bar">
      <div className="left">
        <Link to="/">
          <h1>bitRable Bus Booking</h1>
        </Link>
      </div>
      <div className="right">
        {!isAuthenticated && <Link to="/register">Sign Up</Link>}
        {!isAuthenticated && <Link to="/login">Sign In</Link>}
        {isAuthenticated && userCategory === "operator" && (
          <Link to="/schedule">Schedule</Link>
        )}
        {isAuthenticated && userCategory === "operator" && (
          <Link to="/bustype">Bus types</Link>
        )}
        {isAuthenticated && userCategory === "operator" && (
          <Link to="/busroute">Bus routes</Link>
        )}
        {isAuthenticated && userCategory === "passenger" && (
          <Link to="/search">Search</Link>
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
