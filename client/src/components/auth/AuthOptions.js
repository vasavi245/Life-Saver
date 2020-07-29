import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";






  
export default function AuthOptions() {


  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const about = () => history.push("/about");
  const users = () => history.push("/users");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  console.log(userData.user);
  return (
    <nav className="auth-options">
      {userData.user ? (
        <>
         
        <button onClick={logout}>Log out</button>
        <button onClick={users}>List of Donors</button>
       
        </>
      ) : (
        <>
           <button onClick={login}>Log in</button>
          <button onClick={register}>Register</button>
          <button onClick={about}>About us</button>
          
         
        </>
      )}
    </nav>
  );
}