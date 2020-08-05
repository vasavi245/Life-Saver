import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AddIcCallOutlinedIcon from "@material-ui/icons/AddIcCallOutlined";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import "./Home.css";
import Fade from "react-reveal/Fade";
import Typography from '@material-ui/core/Typography';
import BloodBanks from "../BloodBanks";

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

export default function Contact() {
  const classes = useStyles();

  return (
    <div className="contact">
      <div className="about-cont">
        <h1 className="about-heading">Contact us</h1>
      </div>
      <section
        className={classes.root}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1 style={{ textAlign: "center" }}>
                Contact us for urgent needs
              </h1>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmailOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Email"
                    secondary="admin_lifesaver@gmail.com"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AddIcCallOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Phone" secondary="080000" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <HomeWorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Address"
                    secondary="unit1/1 Main Street, Perth, WA"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </section>
      <div className="places">
        <Typography variant="h3" component="h4" style={{textAlign: "center", fontStyle: "italic",}}>
          List of Blood Banks in and around Perth
        </Typography>
        <Fade bottom>
       <BloodBanks />
       </Fade>
        </div>
    </div>
  );
}
