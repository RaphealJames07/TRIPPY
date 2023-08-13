import axios from "axios";
import { useDispatch } from "react-redux";
import { trippyApiTours } from "../Redux/Features";
import { useEffect } from "react";


const Api2 = () => {
    const url = "https://trippyapiv1.onrender.com/trippy/find-tours";
    const Dispatch = useDispatch();

    const getApi = () => {
      axios.get(url).then((res) => {
          // console.log("api", res);
          Dispatch(trippyApiTours(res.data.tours));
      });
  };

  useEffect(() => {
    getApi();
},);
};

export default Api2;

