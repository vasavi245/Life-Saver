import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import "../components/pages/Home.css";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const SavedDonors = (props) => {
    const classes = useStyles();

    return props.savedDonors.length === 0 ? (
        <>
        <CssBaseline />
        <Container className="admin-container" style={{ height: '100vh' }}>
            <Typography  component="div"  >
                <h2>List of Donors</h2>
            </Typography>
        </Container>

        </>

    ) : (
        <>
        <CssBaseline />
        <Container >
            <Typography className="admin-container" component="div" style={{  height: '100vh' }} >
                <h2>List of Donors</h2>
            </Typography>
            {props.savedDonors.map((items) => {
                return(
                    <div className={classes.root}>
                <Grid container spacing={3}>
               <Grid item xs={12}>
               <Paper className={classes.paper}>
                   <List>
                       <ListItem>
                           <ListItemText primary={items.name} />
                       </ListItem>
                       <ListItem>
                           <ListItemText primary={items.regEmail} />
                       </ListItem>
                       <ListItem>
                           <ListItemText primary={items.age} />
                       </ListItem>
                       <ListItem>
                           <ListItemText primary={items.suburb} />
                       </ListItem>
                       <ListItem>
                           <ListItemText primary={items.bloodGroup} />
                       </ListItem>
                   </List>
               </Paper>
              </Grid>
              </Grid>
            </div>
                );
            })}


        </Container>
        </>


    );
};

export default SavedDonors;