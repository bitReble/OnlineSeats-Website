import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="left">
        <Link to="/">
          <h1>bitRable Bus Booking</h1>
        </Link>
      </div>
      <div className="right">
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
};

export default NavBar;
