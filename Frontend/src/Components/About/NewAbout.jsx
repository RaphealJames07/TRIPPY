import "./NewAbout.css";

const NewAbout = () => {
    return (
        <>
            <div className="NewAboutBody">
              <div className="NewAboutBodyHeader">
                <h1 className="aboutUsText">About Us</h1>
              </div>
              <div className="aboutusdiv">
                <div className="firstabout">
                  <h1>Welcome to Trippy, where your travel dreams take flight.</h1>
                  <h2> We're not just another booking platform; we're your travel companion, your adventure architect. Our mission is simple: to make your travel experience as seamless as the journeys you embark upon.</h2>
                </div>
                <div className="secondabout">
                  <h1>What We Do: All Your Travel Needs, One Click Away</h1>
                  <h2>From flights that defy gravity to cozy nests in every corner of the world, and wheels that ignite the road beneath you – we've got it all. Trippy brings flight booking, hotel reservations, and car rentals to your fingertips, all in one place. No more bouncing between tabs, just smooth sailing from start to finish.</h2>
                </div>
              </div>
              <div className="NewAboutBodyContent">
                   <div className="anotherpicdiv"></div>
                   <div className="thetextaboutdiv">
                    <h1>Join the Trippy Community</h1>
                    <h2>Experience travel like never before. Dive into the beauty of the unknown, and let us be your guide. Your next adventure starts here at Trippy. Let's make memories together.  You'll be glad you did.</h2>
                   </div>
              </div>
            </div>
        </>
    );
};

export default NewAbout;