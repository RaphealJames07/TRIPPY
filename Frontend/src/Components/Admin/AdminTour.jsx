import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const columns = [
  {
    title: "Tour Name",
    dataIndex: "tourName",
    key: "tourName",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Price",
    dataIndex: `pricePerPerson`,
    key: `pricePerPerson`,
  },
];



const AdminTour = () => {

  const user = useSelector((state) => state.Trippy.trippyUser);

  const userToken = user.token;

  const[tours, setTours]= useState([])

    const handleGetAllTour = () => {
        const token = userToken;

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.get(`https://trippyapiv1.onrender.com/trippy/find-tours`, {headers})
              .then((res)=>{
                console.log(res.data.tours);
                setTours(res.data.tours)
              })
              .catch((err)=>{
                console.log(err);
              })
    };

    useEffect(() => {

      handleGetAllTour()  

    }, [])

  return (
    <div>
      <h2>Tour Name</h2>
      <Table columns={columns} dataSource={tours} />
    </div>
  );
};

export default AdminTour;
