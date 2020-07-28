import React,{ Component } from 'react';

import SavedDonors from "../SavedDonors";

import API from '../utils/API';
import DonorForm from '../DonorForm';





class DonorPage extends Component {
    state= {
        savedDonors : [],
        change: "",
        error: "",
        message: "",
    };
     
    // handles the confirmed donor
    handleChange = (event) => {
        event.preventDefault();
        API.getDonor(this.state.change)
        .then((res) => {
            if (res.data.items === "error") {
                throw new Error(res.data.items);
            } else {
                // store the response in array
                let results = res.data.items;

                 results = results.map((result) => {
                    //store each donor information in a new object

                    result = {
                        key: result.id,
                        name: result.name,
                        regEmail: result.regEmail,
                        suburb: result.suburb,
                        age: result.age,
                        bloodGroup: result.bloodGroup
                    };
                    return result;
                });

                //reset the state of the empty books array to the new array of objects with properties getting back from response
                this.setState({donors: results, error: ""});
            }
        })
        .catch((err) => this.setState({error: err.items }));
    };
    // grabs all the donors that were saved to the database
    componentDidMount() {
        API.getDonors()
        .then((res) => this.setState({ savedDonors: res.data }))
        .catch((err) => console.log(err));
    }
  
    render() {
     

        return(
            <div>
                <DonorForm handleChange={this.handleChange} />
              <SavedDonors
                  savedDonors={this.state.savedDonors}
                  />
            </div>

            

        );
    }
}


export default DonorPage;