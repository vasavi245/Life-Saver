import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
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
     
  });



export class Success extends Component {

   
    

    closeDialog = () => {
        this.props.handleClose();
        window.location.reload();
    }
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { classes } = this.props;
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
           
            <button className="close-btn" onClick={this.closeDialog} >
      ✗
    </button>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
          </Dialog>
        </>
    );
  }
}

export default  withStyles(useStyles)(Success);