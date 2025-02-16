import React, { useState } from "react";
import styled from "styled-components";
import "./Navbar.css";
import { Link } from "react-router-dom";
import image1 from "../../images/background.png";
import { useEffect } from "react";

const Button = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <button className="button">
            <div>
              <span>HOME</span>
            </div>
          </button>
        </Link>

        <Link to={"/event"}>
          <button className="button">
            <div>
              <span>EVENT</span>
            </div>
          </button>
        </Link>
        <Link to={"/Accomodation"}>
          <button className="button">
            <div>
              <span>ACCOMODATION</span>
            </div>
          </button>
        </Link>

        <Link to={"/schedule"}>
          <button className="button">
            <div>
              <span>SCHEDULE</span>
            </div>
          </button>
        </Link>
        <button className="button">
          <div>
            <span>CONTACT </span>
          </div>
        </button>
        <button className="button">
          <div>
            <span>REGISTER</span>
          </div>
        </button>
      </div>
      <div className="navbar_item">
        <div className="logo">
          <img src={image1} />
        </div>
        <div>
          <ul id="navbar_id" className={clicked ? "active" : ""}>
            <Link to={"/event"}>
              <li>Event</li>
            </Link>
            <li>Competations</li>
            <li>Accomodation</li>
            <li>Schedule</li>
            <li>Contact</li>
            <li>Register</li>
          </ul>
        </div>
        <div className="menu-icons" onClick={() => setClicked((prev) => !prev)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </>
  );
};
// Add functionality to hide navbar on scroll up and show on scroll down

// const Button = () => {
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
//   const [visible, setVisible] = useState(true);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//     setPrevScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos, visible, handleScroll]);

//   return (
//     <div className={`navbar ${visible ? "visible" : "hidden"}`}>
//       <Link to={"/"}>
//         <button className="button">
//           <div>
//             <span>HOME</span>
//           </div>
//         </button>
//       </Link>

//       <Link to={"/event"}>
//         <button className="button">
//           <div>
//             <span>EVENT</span>
//           </div>
//         </button>
//       </Link>
//       <Link to={"/Accomodation"}>
//         <button className="button">
//           <div>
//             <span>ACCOMODATION</span>
//           </div>
//         </button>
//       </Link>

//       <Link to={"/schedule"}>
//         <button className="button">
//           <div>
//             <span>SCHEDULE</span>
//           </div>
//         </button>
//       </Link>

//       <button className="button">
//         <div>
//           <span>CONTACT </span>
//         </div>
//       </button>
//       <button className="button">
//         <div>
//           <span>REGISTER</span>
//         </div>
//       </button>
//     </div>
//   );
// };

export default Button;
