import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "./Home.css";


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

export default function Conatct() {

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
                  <h1 style={{textAlign:'center'}}>Conatact us for urgent needs</h1>
                  
                  </Paper>
                  </Grid>
                  </Grid>
                  </section>
        </div>
    );
}