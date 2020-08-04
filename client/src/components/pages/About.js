import React from 'react';
import Paper from '@material-ui/core/Paper';
import "./Home.css";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }));

export default function About() {
    const classes = useStyles();

    return(
      
        <div className="about">
             <div className="about-cont"  >
               

                     <h1 className="about-heading">About Us</h1>
                
                 </div>
                
                <section className={classes.root}>
                    
                <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <Typography component="h6" variant="h5">
              Life Saver is a small voluntary and non-governmental organization. It maintains Online library of blood donors. Sometimes Doctors and Blood bank project have to face the difficulty in finding the blood group Donors at right time. Life Saver has attempted to provide the answer by taking upon itself the task of encouraging the donors to register and get approved by the administration after neccessary tests.

              </Typography>
              <Typography component="h6" variant="h5">
              At any point of time the people who are in need can reach the donors by conatcing us. On the basis of humanity, Everyone is welcome to register as a blood donor.
              </Typography>
          </Paper>
        </Grid>
        </Grid>
                </section>
               
               
                 
            </div>
            
    );
}