import './Booking.css'
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Flight from "./Flight"


const Booking = () => {
  return (
    <>
      <div className="BookingBody">
        <Header/>
        <Flight/>
        <Footer/>
      </div>
    </>
  )
}

export default Booking