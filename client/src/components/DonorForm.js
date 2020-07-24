import React, { Component } from 'react';
import   DonorPersonalDetails  from './DonorPersonalDetails';
import  DonorBloodGroup from './DonorBloodGroup';

import Confirm from './Confirm';
import Success from './Success';



export class DonorForm extends Component {
     constructor(props){
        super(props);
        // initialize our component state
        this.state = {
            step: 1,
            name: '',
            email: '',
            age: '',
            suburb: '',
            bloodgroup: '',
            showForm: false
          };
       this.onClick = this.onClick.bind(this);
       this.handleClose = this.handleClose.bind(this);
    }

    onClick() {
        //on click will change our state
        this.setState({ showForm: true });
    }
    
    handleClose() {
        this.setState({ showForm: false })
    }
    
 

  
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  renderForm() {
 
    const { step } = this.state;
    const { name,  email, age, suburb, bloodgroup } = this.state;
    const values = { name, email, age, suburb, bloodgroup };
    console.log(step);
    switch (step) {
        
      case 1:
        return (
          <DonorPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleClose={this.handleClose}
            values={values}
          />
        );
      case 2:
        return (
          <DonorBloodGroup
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleClose={this.handleClose}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleClose={this.handleClose}
            values={values}
          />
        );
      case 4:
        return <Success 
        handleClose={this.handleClose}/>;
      default:
        (console.log('This is a the donor registration form.'))
    }
      
  }
  render() {
      // We get the state to show the form 
      const { showForm } = this.state;
      return(
          <nav className="auth-options">
              <button onClick={this.onClick }>Become A Donor</button>
              {/* We want to show the form if the state is true */}
              {showForm && this.renderForm()}
          </nav>
      );
}
}



export default DonorForm;