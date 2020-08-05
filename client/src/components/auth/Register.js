import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import image from "../Images/reg-blood.jpg";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [fullName, setFullName] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [suburb, setSuburb] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        email,
        password,
        passwordCheck,
        fullName,
        gender,
        age,
        bloodGroup,
        suburb,
      };
      await Axios.post("http://localhost:5000/users/register", newUser);
      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
      alert(
        "Thank you for you contribution, You will soon get an email with more information"
      );
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="page">
      <img
        src={image}
        alt="reg"
        className="reg-image"
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      />
      <h2 style={{ textAlign: "center" }}>
        Please fill in your details to Become a Donor{" "}
      </h2>

      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <label htmlFor="register-full-name">Full name</label>
        <input
          id="register-full-name"
          type="text"
          onChange={(e) => setFullName(e.target.value)}
        />

        <label htmlFor="register-age">Age</label>
        <input
          id="register-age"
          type="text"
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="register-gender">Gender</label>
        <input
          id="register-gender"
          type="text"
          onChange={(e) => setGender(e.target.value)}
        />

        <label htmlFor="register-bloodGroup">Blood Group</label>
        <input
          id="register-bloodgroup"
          type="text"
          onChange={(e) => setBloodGroup(e.target.value)}
        />

        <label htmlFor="register-suburb">Suburb</label>
        <input
          id="register-suburb"
          type="text"
          onChange={(e) => setSuburb(e.target.value)}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
