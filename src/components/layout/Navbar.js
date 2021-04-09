import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="left">
        <h1>bitRable Bus Booking</h1>
      </div>
      <div className="right">
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default NavBar;
