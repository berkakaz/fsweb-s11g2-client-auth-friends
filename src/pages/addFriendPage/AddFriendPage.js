import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "../addFriendPage/AddFriendPage.css";

const AddFriendPage = () => {
  const navigate = useNavigate();

  const [addFriend, friendData, loading, error] = useAxios([]);

  //form handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //submit handler
  const onSubmit = (data) => {
    addFriend("/friends", "post", data);
    navigate("/friends");
  };

  return (
    <div className="addfriend-page">
      <h2>Add Friend</h2>
      <form className="addfriend-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="friend-name">Friend Name</label>
        <input {...register("name")} type="text" name="name" required />
        <label htmlFor="friend-email">Friend Email</label>
        <input {...register("email")} type="email" name="email" required />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddFriendPage;
