import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { faUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? (
          <div className="navLeft">
            <div className="userArea">
              <FontAwesomeIcon icon={faUser} />
              {user.username}
            </div>
            <div>
              <FontAwesomeIcon onClick={handleClick} icon={faSignOut} />
            </div>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
