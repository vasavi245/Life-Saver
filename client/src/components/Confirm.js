import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';



export class Confirm extends Component {

    closeDialog = () => {
        this.props.handleClose();
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
    const {
      values: { name, email, Age, suburb, bloodgroup }
    } = this.props;
    return (
    
        <>
          <Dialog
            open
            fullWidth
           
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={name} />
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

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
             <Button 
            variant="contained"
            onClick={this.closeDialog}>
                Cancel
            </Button>
          </Dialog>
        </>

    );
  }
}

export default Confirm;