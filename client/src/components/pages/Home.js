import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../Images/blood-image.jpg";
import "./Home.css";
import Fade from "react-reveal/Fade";
import UserContext from "../../context/UserContext";

import image1 from "../Images/benefits.jpg";
import image2 from "../Images/savelife.png";
import image4 from "../Images/donated-blood.png";



export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <div>
          <Fade right>
        <h1 className="welcome-msg">Welcome {userData.user.fullName}</h1>
        </Fade>
       <div>
       <img src={image4} alt="donor" className="home-page-image" />
       </div>
        
        
        

        </div>

         
        
    
      ) : (
        <>
         
         
          <img src={image} alt="blood" className="responsive" />
          
          <div id="header">
          <Link to="/Register"> <h2 className="login-msg">Click here to Register as Donor</h2></Link>
          </div>
          <div className="benefits">
            <img src={image1} alt="benefits" className="bene-image" /><img src={image2} alt="save" className="bene-image" />
          </div>
         

        </>
      )}
    </div>
  );
}