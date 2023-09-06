import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const columns = [
  {
    title: "User ID",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];



const AdminUsers = () => {

  const user = useSelector((state) => state.Trippy.trippyUser);

    const userToken = user.token;

  const[users, setUsers]= useState([])

  const userData = users

  // const usersDatas = [
  //   {
  //     key: "1",
  //     userId: "U001",
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "john@example.com",
  //     status: "Active",
  //   },
  //   {
  //     key: "2",
  //     userId: "U002",
  //     firstName: "Jane",
  //     lastName: "Smith",
  //     email: "jane@example.com",
  //     status: "Inactive",
  //   },
  //   {
  //     key: "3",
  //     userId: "U003",
  //     firstName: "Bob",
  //     lastName: "Johnson",
  //     email: "bob@example.com",
  //     status: "Active",
  //   },
  //   // Add more rows as needed
  // ];

    const handleGetAllUser = () => {
        const token = userToken;

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.get(`https://trippyapiv1.onrender.com/trippy/getall`, {headers})
              .then((res)=>{
                console.log(res.data.users);
                setUsers(res.data.users)
              })
              .catch((err)=>{
                console.log(err);
              })
    };

    useEffect(() => {
      handleGetAllUser()
    }, [])

  return (
    <div>
      <h2>Users</h2>
      <Table columns={columns} dataSource={userData} />
    </div>
  );
};

export default AdminUsers;
