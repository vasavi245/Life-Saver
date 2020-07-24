import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../components/pages/Home.css";



export  class DonorPersonalDetails extends Component {

  closeDialog = () => {
      this.props.handleClose();
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    console.log("this is user reg")
    return (
       
     
     
        <>
       
          <Dialog
            open
            fullWidth
            maxWidth='sm'
            className="donor-dialog"
          >

           
           
            <TextField
              placeholder="Enter Your First Name"
              label="Name"
              onChange={handleChange('name')}
              defaultValue={values.name}
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
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
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

export default DonorPersonalDetails;