import React, { useContext } from "react";
import "../components/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { setLoggedInToken, setisLoggedIn, isLoggedIn } =
    useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedInToken(null);
    setisLoggedIn(false);
  };
  return (
    <nav className="navbar">
      <h1>Friends Database</h1>
      <ul className="navlinks">
        {!isLoggedIn ? (
          <li>
            <Link to="/">Login.</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/friends">Friendlist.</Link>
            </li>
            <li>
              <Link to="/friends/add">AddFriend.</Link>
            </li>
            <li>
              <Link onClick={logout} to="/">
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
