import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import "../loginPage/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  //axios custom hook
  const [loginUser, userData, loading, error] = useAxios([]);

  const navigate = useNavigate();

  //auth props with useContext
  const { localStorageKey, setLoggedInToken, setisLoggedIn } =
    useContext(AuthContext);

  //form handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //submit handler
  const onSubmit = (data) => {
    loginUser("/login", "post", data);
  };

  //after login request, grab&save token both localstorage and state, then redirect friends page
  useEffect(() => {
    if (userData?.token) {
      localStorage.setItem(localStorageKey, userData.token);
      setLoggedInToken(userData.token);
      setisLoggedIn(true);
      navigate("/friends");
    }
  }, [userData]);

  return (
    <div className="loginpage">
      <h2>Login</h2>
      <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input {...register("username")} type="text" name="username" required />
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          type="password"
          name="password"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
