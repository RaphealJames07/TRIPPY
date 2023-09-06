import {Chart} from "chart.js";
import "chart.js/auto";
import {Bar} from "react-chartjs-2";
import {Card, Row, Col, Table} from "antd";
import {
    UserOutlined,
    LaptopOutlined,
    ContainerOutlined,
    DollarOutlined,
} from "@ant-design/icons";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

const {Column} = Table;

const AdminDash = () => {
    // Generate random figures for each box (you can replace with actual data)
    // const totalUsers = Math.floor(Math.random() * 1000);
    // const totalTours = Math.floor(Math.random() * 100);
    // const totalBookings = Math.floor(Math.random() * 500);
    // const totalRevenue = (Math.random() * 10000).toFixed(2);

    // Generate random data for the recent bookings table
    const recentBookings = [];
    for (let i = 1; i <= 5; i++) {
        recentBookings.push({
            key: i,
            bookingId: `B00${i}`,
            tourName: `Tour ${i}`,
            flight: `Flight ${i}`,
            hotel: `Hotel ${i}`,
            car: `Car ${i}`,
            totalAmount: `$${(Math.random() * 1000).toFixed(2)}`,
        });
    }

    // Data for the bar chart (January to December)
    const chartData = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        datasets: [
            {
                label: "Data Difference",
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Reference to the chart canvas
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext("2d");
            new Chart(ctx, {
                type: "bar",
                data: chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                        },
                    },
                },
            });
        }
    }, []);

    const user = useSelector((state) => state.Trippy.trippyUser);

    const userToken = user.token;

    const[users, setUsers]= useState([])

    const handleGetAllUser = () => {
        const token = userToken;

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.get(`https://trippyapiv1.onrender.com/trippy/getall`, {headers})
              .then((res)=>{
                console.log(res.data.users);
                setUsers(res.data.users.length)
              })
              .catch((err)=>{
                console.log(err);
              })
    };

    const[tours, setTours]= useState([])

    const handleGetAllTour = () => {
        const token = userToken;

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.get(`https://trippyapiv1.onrender.com/trippy/find-tours`, {headers})
              .then((res)=>{
                console.log(res.data.tours);
                setTours(res.data.tours.length)
              })
              .catch((err)=>{
                console.log(err);
              })
    };
    const [bookings, setBookings] = useState([]);
    const [bookingsTotal, setBookingsTotal] = useState([]);

// const bookingsTotal = bookings?.reduce((accumulator, currentBooking) => {
//   return accumulator + currentBooking.totalPrice;
// }, 0);



    const handleGetAllBookings = () => {
        const token = userToken;

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.get(`https://trippyapiv1.onrender.com/trippy/all-bookings`, {headers})
              .then((res)=>{
                console.log(res.data);
                setBookings(res.data.bookings[0].totalPrice)
                setBookingsTotal(res.data.bookings.length)
              })
              .catch((err)=>{
                console.log(err);
              })
    };

    useEffect(() => {
      handleGetAllUser()
      handleGetAllTour()  
      handleGetAllBookings()
    }, [])
    

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Card>
                        <UserOutlined style={{fontSize: "24px"}} />
                        <div>Total Users</div>
                        <div>{users}</div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <LaptopOutlined style={{fontSize: "24px"}} />
                        <div>Total Tours</div>
                        <div>{tours}</div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <ContainerOutlined style={{fontSize: "24px"}} />
                        <div>Total Bookings</div>
                        <div>{bookingsTotal}</div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <DollarOutlined style={{fontSize: "24px"}} />
                        <div>Total Revenue</div>
                        <div>${bookings}</div>
                    </Card>
                </Col>
            </Row>
            <div
                style={{
                    marginTop: "20px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div style={{width: "50%"}}>
                    <h2>Recent Bookings</h2>
                    <Table dataSource={recentBookings} size="small">
                        <Column
                            title="Booking ID"
                            dataIndex="bookingId"
                            key="bookingId"
                        />
                        <Column
                            title="Tour Name"
                            dataIndex="tourName"
                            key="tourName"
                        />
                        <Column
                            title="Flight"
                            dataIndex="flight"
                            key="flight"
                        />
                        <Column title="Hotel" dataIndex="hotel" key="hotel" />
                        <Column title="Car" dataIndex="car" key="car" />
                        <Column
                            title="Total Amount"
                            dataIndex="totalAmount"
                            key="totalAmount"
                        />
                    </Table>
                </div>
                <div style={{marginTop: "20px", width: "50%"}}>
                    <h2>Monthly Differences</h2>
                    <Bar data={chartData} style={{width: "100%"}} />
                </div>
            </div>
        </>
    );
};

export default AdminDash;
