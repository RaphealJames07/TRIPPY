
import { useState } from "react";
import "./Play.css"; // Import your CSS file
import { Fade } from "react-awesome-reveal";

function Play() {
    const [open, setOpen] = useState(false);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    return (
        <>
            
                <Fade>
                <div className="container">
                    <button className="button" onClick={toggleCollapse}>
                        click
                    </button>
                    <div
                        id="example-collapse-text"
                        className={`collapse ${open ? "show" : ""}`}
                    >
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas amet consequatur dolorem culpa quam quaerat distinctio placeat, error quidem labore provident officiis voluptatum reprehenderit sequi unde non eius veritatis.
                    </div>
                </div>
                </Fade>
           
        </>
    );
}

export default Play;
