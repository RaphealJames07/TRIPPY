
import { useState, useEffect } from 'react';
import './Play.css'; // Import your CSS file

const testimonials = [
  {
    name: "John Doe",
    position: "CEO",
    photo: "john-doe.jpg",
    text: "This is a testimonial text.",
  },
  {
    name: "Alice Smith",
    position: "Marketing Manager",
    photo: "alice-smith.jpg",
    text: "I'm impressed with the quality of service provided by this company.",
  },
  {
    name: "Bob Johnson",
    position: "Product Manager",
    photo: "bob-johnson.jpg",
    text: "The team's dedication and expertise are remarkable.",
  },
  {
    name: "Emily Brown",
    position: "Customer Support",
    photo: "emily-brown.jpg",
    text: "I've had a great experience working with this company.",
  },
  {
    name: "Michael Wilson",
    position: "Software Engineer",
    photo: "michael-wilson.jpg",
    text: "I highly recommend their products and services.",
  },
  {
    name: "Sophia Lee",
    position: "Designer",
    photo: "sophia-lee.jpg",
    text: "Their designs are innovative and eye-catching.",
  },
  {
    name: "Daniel Clark",
    position: "Finance Manager",
    photo: "daniel-clark.jpg",
    text: "Their financial solutions have been a game-changer for us.",
  },
  {
    name: "Olivia Garcia",
    position: "Sales Representative",
    photo: "olivia-garcia.jpg",
    text: "I've seen a significant boost in sales since partnering with them.",
  },
  {
    name: "Liam Martinez",
    position: "Operations Manager",
    photo: "liam-martinez.jpg",
    text: "Their efficiency in operations is second to none.",
  },
  {
    name: "Ava Anderson",
    position: "HR Manager",
    photo: "ava-anderson.jpg",
    text: "A great place to work with a fantastic team.",
  },
];



const Play = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const updateTestimonial = () => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const intervalId = setInterval(updateTestimonial, 10000);
  
    return () => clearInterval(intervalId);
  }, []);

  const { name, position, photo, text } = testimonials[testimonialIndex];

  return (
    <div className="testimonial-container">
      <div className="progress-bar"></div>
      <i className="fas fa-quote-right fa-quote"></i>
      <i className="fas fa-quote-left fa-quote"></i>
      <p className="testimonial">{text}</p>
      <div className="user">
        <img src={photo} alt={name} className="user-image" />
        <div className="user-details">
          <h4 className="username">{name}</h4>
          <p className="role">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Play;