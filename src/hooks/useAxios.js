import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { axiosWithAuth } from "../api/axiosWithAuth";

const useAxios = (initialValue) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();

  const doRequest = (endpoint, reqType, formData) => {
    setLoading(true);

    axiosWithAuth()
      [reqType](endpoint, formData)
      .then((res) => {
        setData(res.data);
        setError(null);
        toast.success("Request basarili!");
        console.log("res data>", res.data);
      })

      .catch((err) => {
        setError(err.message);
        setData(initialValue);
        toast.error(`Request basarisiz> ${err.message}`);
      })
      .finally(() => setLoading(false));
  };
  return [doRequest, data, loading, error];
};

export default useAxios;
