import axios from "axios";
import { useDispatch } from "react-redux";
import { trippyApiCategories } from "../Redux/Features";
import { useEffect } from "react";


const Api = () => {
    const url = "https://trippyapiv1.onrender.com/trippy/find-categories";
    const Dispatch = useDispatch();

    const getApi = () => {
      axios.get(url).then((res) => {
          // console.log("api", res);
          Dispatch(trippyApiCategories(res.data.category));
      });
  };

  useEffect(() => {
    getApi();
},);
};

export default Api;

