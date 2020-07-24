import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import image from "../components/Images/blood-types.jpg";


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
    const { values, handleChange } = this.props;
    return (
        
     
     
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <Card className="bloodgroup" >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="blood groups"
          height="140"
          image={image}
          title="Blood Groups"
        />
        </CardActionArea>
        </Card>
           
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

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

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

export default DonorBloodGroup;