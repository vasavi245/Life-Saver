import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../Images/blood-image.jpg";
import "./Home.css";
import Fade from "react-reveal/Fade";
import UserContext from "../../context/UserContext";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import image1 from "../Images/benefits.jpg";
import image2 from "../Images/savelife.png";
import image4 from "../Images/donated-blood.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

export default function Home() {
  const classes = useStyles();
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
            <h1 style={{ color: "white", textAlign: "center" }}>
              Who is eligible
            </h1>
          </div>
          <section className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography component="h6" variant="h5">
                    Healthy adults aged 17 to 56 are encouraged to donate blood.
                    This is in line with World Health Organisation(WHO)
                    guidelines for ensuring a safe blood supply.All types of
                    people need blood donations, which means that all types of
                    blood are needed.Depending on your blood type, you maybe
                    able to donate various components of your blood.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </section>

          <div id="header">
            <Link to="/Register">
              {" "}
              <h2 className="login-msg">Click here to Register as Donor</h2>
            </Link>
          </div>
          <div className="benefits">
            <img src={image1} alt="benefits" className="bene-image" />
            <img src={image2} alt="save" className="bene-image" />
          </div>
        </>
      )}
    </div>
  );
}
