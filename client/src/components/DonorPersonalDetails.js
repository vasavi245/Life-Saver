import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "../components/pages/Home.css";


const useStyles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    dialogPaper: {
        borderRadius: "20px",
        border: '#FF0000 1px solid',
        color: "black",

      },
      btnCont: {
        backgroundColor: "#00a152",
      },
      btnCanel: {
          backgroundColor: "#c62828",
      }
  });


export  class DonorPersonalDetails extends Component {

   

  closeDialog = () => {
      this.props.handleClose();
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
 
  render() {
    const { classes } = this.props;
    const { values, handleChange } = this.props;

    console.log("this is user reg")
    return (
       
     
     
        <>
       
          <Dialog
            open
            fullWidth
            maxWidth='sm'
            className="donor-dialog"
            classes={{paper:classes.dialogPaper}}
            PaperProps={{
                style: {
                padding:"20px",
               
                
                },
                
            }}
          >

           
           
            <TextField
              placeholder="Enter Your First Name"
              label="Name"
              onChange={handleChange('name')}
              defaultValue={this.props.name}
              margin="normal"
              
            />
            <br />
            <TextField
              placeholder="Enter Your age"
              label="age"
              onChange={handleChange('age')}
              defaultValue={values.age}
              margin="normal"
            
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
            
              placeholder="Enter Your suburb"
              label="Suburb"
              onChange={handleChange('suburb')}
              defaultValue={values.suburb}
              margin="normal"
              fullWidth
            />
            <br />
            <div className={classes.root}>
            <Button
              className={classes.btnCont}
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            <Button 
            className={classes.btnCanel}
            variant="contained"
            onClick={this.closeDialog}>
                Cancel
            </Button>
            </div>
          </Dialog>
        </>
       
     
    );
  }
}

export default  withStyles(useStyles)(DonorPersonalDetails);