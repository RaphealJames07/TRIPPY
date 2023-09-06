import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminBooking = () => {
  const [bookings, setBookings] = useState([]);
  const user = useSelector((state) => state.Trippy.trippyUser);
  const userToken = user.token;

  const handleGetAllBookings = () => {
    const token = userToken;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(`https://trippyapiv1.onrender.com/trippy/all-bookings`, { headers })
      .then((res) => {
        console.log(res.data);
        setBookings(res.data.bookings);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetAllBookings();
  }, []);

  const columns = [
    {
      title: "Booking ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Booked By",
      dataIndex: "user",
      key: "user",
      render: (text, record) => {
        // Assuming "user" object contains "firstName" and "lastName" fields
        const fullName = `${record.user.firstName} ${record.user.lastName}`;
        return fullName;
      },
    },
    {
      title: "Total Amount",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Hotel",
      dataIndex: "hotelBooking",
      key: "hotelBooking",
      render: (text, record) => {
        if (record.hotelBooking) {
          return "Booked";
        }
        return "Not Booked";
      },
    },
    {
      title: "Car",
      dataIndex: "rentalBooking",
      key: "rentalBooking",
      render: (text, record) => {
        if (
          record.rentalBooking &&
          record.rentalBooking.carRental &&
          record.rentalBooking.rentalDays &&
          record.rentalBooking.rentalDate
        ) {
          return "Booked";
        }
        return "Not Booked";
      },
    },
    {
      title: "Flight",
      dataIndex: "flightBooking",
      key: "flightBooking",
      render: (text, record) => {
        if (
          record.flightBooking &&
          record.flightBooking.flight &&
          record.flightBooking.flightDate
        ) {
          return "Booked";
        }
        return "Not Booked";
      },
    },
    {
      title: "Tour",
      dataIndex: "tourBooking",
      key: "tourBooking",
      render: (text, record) => {
        if (
          record.tourBooking &&
          record.tourBooking.tourId &&
          record.tourBooking.tourId.tourName &&
          record.tourBooking.tourPrice
        ) {
          return "Booked";
        }
        return "Not Booked";
      },
    },
  ];
  

  return (
    <div>
      <h2>Bookings</h2>
      <Table columns={columns} dataSource={bookings} />
    </div>
  );
};

export default AdminBooking;
