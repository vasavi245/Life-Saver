import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../components/pages/Home.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
    root: {
    width: "100%",
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
        <Container fixed  className="admin-container" style={{ height: '100vh' }}>
           
                <h2 style={{textAlign:'center'}}>List of Donors</h2>
           
                    <div className={classes.root}>
                <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={4}>
               <Grid item xs={12}>
               <Paper className="list" style={{width:"100%", marginTop: "10px",  overflow: "auto"}} >
                <Table style={{ minWidth:700 }}>
               <TableHead>
          <TableRow>
           
            <TableCell >Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Gender</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >BloodGroup</TableCell>
            <TableCell >Suburb</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.savedDonors.map((items) => {
                return(
        
              
               <TableRow key={items.fullName}>
                 
               <TableCell component="th" scope="row">
                 {items.fullName}
               </TableCell>
               <TableCell >{items.email}</TableCell>
               <TableCell >{items.gender}</TableCell>
               <TableCell >{items.age}</TableCell>
               <TableCell >{items.bloodGroup}</TableCell>
               <TableCell >{items.suburb}</TableCell>
             </TableRow>

                 );
            })}
                      
         </TableBody>
            </Table>
               </Paper>
              </Grid>
              </Grid>
            </div>
              


        </Container>
        </>


    );
};

export default SavedDonors;