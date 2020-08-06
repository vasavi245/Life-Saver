import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../components/pages/Home.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from '@material-ui/icons/Delete';


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
      <Container className="admin-container" style={{ height: "100vh" }}>
        <Typography component="div">
          <h2>List of Donors</h2>
        </Typography>
      </Container>
    </>
  ) : (
    <>
      <CssBaseline />
      <Container fixed className="admin-container" style={{ height: "100vh" }}>
        <h2 style={{ textAlign: "center" }}>List of Donors</h2>
        
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12}>
              <Paper
                className="list"
                style={{ width: "100%", marginTop: "10px", overflow: "auto" }}
              >
                <Table style={{ minWidth: 700 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Email
                      </TableCell>
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Gender
                      </TableCell>
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Age
                      </TableCell>
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        BloodGroup
                      </TableCell>
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Suburb
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.savedDonors.map((items) => {
                      return (
                        <TableRow key={items.fullName}>
                          <TableCell
                            component="th"
                            scope="row"
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "15px",
                            }}
                          >
                            {items.fullName}
                          </TableCell>
                          <TableCell
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "15px",
                            }}
                          >
                            {items.email}
                          </TableCell>
                          <TableCell
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "15px",
                            }}
                          >
                            {items.gender}
                          </TableCell>
                          <TableCell
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "15px",
                            }}
                          >
                            {items.age}
                          </TableCell>
                          <TableCell
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "15px",
                            }}
                          >
                            {items.bloodGroup}
                          </TableCell>
                          <TableCell
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "15px",
                            }}
                          >
                            {items.suburb}
                          </TableCell>
                          <TableCell>
                          <DeleteForeverIcon />
                          </TableCell>
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
