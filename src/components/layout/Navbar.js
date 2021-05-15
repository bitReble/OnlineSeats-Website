import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const NavBar = ({ isAuthenticated, logout }) => {
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
        {isAuthenticated && <Link to="/bustype">Bus types</Link>}
        {isAuthenticated && <Link to="/busroute">Bus routes</Link>}
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
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBar);
