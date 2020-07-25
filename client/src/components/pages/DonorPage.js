import React,{ Component } from 'react';
import axios from "axios";
import SavedDonors from "../SavedDonors";
import Confirm from "../Confirm";
import API from '../utils/API';





class DonorPage extends Component {
    state= {
        savedDonors : [],
        confirm: "",
        error: "",
        message: "",
    };
     
    // handles the confirmed donor
    handleConfirm = (event) => {
        event.preventDefault();
        API.donorPage(this.state.confirm)
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
        axios.get("http://localhost:5000/users/donors")
        .then((res) => this.setState({ savedDonors: res.data }))
        .catch((err) => console.log(err));
    }
  
    render() {
     

        return(
            <div>
                <Confirm handleConfirm={this.handleConfirm} />
              <SavedDonors
                  savedDonors={this.state.savedDonors}
                  />
            </div>

            

        );
    }
}


export default DonorPage;