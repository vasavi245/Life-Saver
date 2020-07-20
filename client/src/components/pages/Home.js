import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../Images/blood-image.jpg";
import "./Home.css"
import UserContext from "../../context/UserContext";


export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
 
        <h1>Welcome {userData.user.displayName}</h1>
       
         
        
    
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>
          <img src={image} alt="blood" className="responsive" />
        </>
      )}
    </div>
  );
}