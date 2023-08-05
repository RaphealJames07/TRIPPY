import "./Flight.css";

const Flight = () => {
    return (
        <>
            <div className="FlightBody">
                <div className="FlightWrapper">
                    <div className="FlightProgress">
                        <p>Details / Booking</p>
                        <div className="FlightProgressBar">
                            <div className="Flightbar1"></div>
                            <div className="Flightbar2"></div>
                            <div className="Flightbar3"></div>
                            <div className="Flightbar4"></div>
                            <div className="Flightbar5"></div>
                            <div className="Flightbar6"></div>
                            <div className="Flightbar7"></div>
                            <div className="Flightbar8"></div>
                            <div className="Flightbar9"></div>
                        </div>
                        <h3>Flight Details</h3>
                        <div className="FlightSearchDiv">
                            <div className="FlightSearchDivDate">
                                <label htmlFor="Date"></label>
                                <div className="FlightSearchDivDateInput">
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Flight;
