import React, { Component } from 'react';
import DonorForm from "../DonorForm";

export default class DonorReg extends Component {
    constructor(props, context) {
        super(props, context);
        this.openDonorForm = this.openDonorForm.bind(this);
        this.closeDonorForm = this.closeDonorForm.bind(this);
      }
    
      openDonorForm() {
        this.refs.donorform.open();
      }
    
      closeDonorForm() {
        this.refs.donorform.close();
      }

      render() {
          return(
              <>
              <nav className="auth-options">
                  <button onClick={this.opendonorform}>Become A Donor</button>
                 
              </nav>
              <DonorForm ref="donoform" />
              </>
          );
      }
}