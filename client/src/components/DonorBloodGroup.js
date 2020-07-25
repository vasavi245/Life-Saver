import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import image from "../components/Images/blood-types.png";
import { withStyles } from '@material-ui/core/styles';
import "../components/pages/Home.css";


const useStyles = theme => ({
    root: {
      
        '& > *': {
            margin: theme.spacing(2),
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
    },
    
   
  });

export class DonorBloodGroup extends Component {

   
    closeDialog = () => {
        this.props.handleClose();
    }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

 

  render() {
    const { classes } = this.props;
    const { values, handleChange } = this.props;
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
                borderRadius: "20"
                
                },
            }}
          >
                  <div  >
                      <img src={image} alt="blood-type" className="blood-type" />
            
                

                   </div>
                   
          
           <br />
            <TextField
              placeholder="Enter Your Blood Group"
              label="Please Enter your blood group"
              onChange={handleChange('bloodgroup')}
              defaultValue={values.bloodgroup}
              margin="normal"
              fullWidth
            />
            <br />
            <div className={classes.root}>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

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

export default withStyles(useStyles)(DonorBloodGroup);