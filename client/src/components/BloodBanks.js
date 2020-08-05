import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import data from "../DonorCenters.json";
import "../components/pages/Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: "center",
  },
  inner: {
    margin: "auto",
  },
  paper: {
    margin: 20,
    borderRadius: 20,
    borderColor: "red",
    Height: 800,
    boxShadow: "0 3px 3px rgba(0,0,0,0.12), 0 2px 2px",
  },
  icon: {
    verticalAlign: "middle",
    position: "relative",
  },
}));

export default function BloodBanks() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item>
        <Grid container justify="center">
          {data.map((items) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                className={classes.inner}
                key={items.id}
              >
                <Paper
                  display="flex"
                  className={classes.paper}
                  variant="outlined"
                  elevation={3}
                >
                  <Typography
                    className={classes.title}
                    variant="h5"
                    component="h1"
                  >
                    {items.title}
                  </Typography>
                  <Typography variant="body1" component="h3">
                    {items.address}
                  </Typography>
                  <Typography>
                    <AddIcCallIcon
                      style={{ display: "inline-block", marginBottom: "-10px" }}
                    />
                    {items.phone}
                  </Typography>

                  <div className="back">
                    <Typography variant="body1" component="h4">
                      Opening hours:
                    </Typography>

                    <div>
                      {items.Hours.map((hour, i) => {
                        return (
                          <Typography variant="body1" component="p" key={i}>
                            {hour.monday}
                            {hour.tuesday}
                            {hour.wednesday}
                            {hour.thursday}
                            {hour.friday}
                            {hour.saturday}
                            {hour.sunday}
                          </Typography>
                        );
                      })}
                    </div>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
