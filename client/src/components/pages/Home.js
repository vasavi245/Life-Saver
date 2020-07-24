import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../Images/blood-image.jpg";
import "./Home.css";
import Fade from "react-reveal/Fade";
import UserContext from "../../context/UserContext";
import Typography from '@material-ui/core/Typography';
import BloodBanks from "../BloodBanks";




export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <div>
          <Fade right>
        <h1 className="welcome-msg">Welcome {userData.user.displayName}</h1>
        </Fade>
        <div className="places">
        <Typography variant="h3" component="h4" style={{textAlign: "center", fontStyle: "italic",}}>
          List of Blood Banks in and around Perth
        </Typography>
        <Fade bottom>
       <BloodBanks />
       </Fade>
        </div>
        

        </div>

         
        
    
      ) : (
        <>
         
          <Link to="/login"> <h2 className="login-msg">Click here to login</h2></Link>
          <img src={image} alt="blood" className="responsive" />
        </>
      )}
    </div>
  );
}