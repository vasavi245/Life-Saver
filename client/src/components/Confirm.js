import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "../components/pages/Home.css";

const useStyles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1.5),
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

export class Confirm extends Component {

    closeDialog = () => {
        this.props.handleClose();
    }

  continue = () => {
   
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

 
  render() {
    const { classes } = this.props;
    const {
      values: { name, email, Age, suburb, bloodgroup }
    } = this.props;
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
         
            <List>
              <ListItem>
                <ListItemText primary="Name" secondary={name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Age" secondary={Age} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Suburb" secondary={suburb} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Blood Group" secondary={bloodgroup} />
              </ListItem>
            </List>
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
              onClick=
                  {this.continue}
            >Confirm & Continue</Button>
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

export default  withStyles(useStyles)(Confirm);