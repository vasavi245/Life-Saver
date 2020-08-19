import React, { Component } from "react";
import API from "../utils/API";
import SavedDonors from "../SavedDonors";

class DonorPage extends Component {
  state = {
    savedDonors: [],
  };

  // when this component mounts, grabs all the users data
  componentDidMount() {
    API.getUsers()
      .then((res) => {
        console.log(res.data.users);
        this.setState({ savedDonors: res.data.users });
      })
      .catch((err) => console.log(err));
  }

  //function to remove user by admin
  handleDelete = (id) => {
    API.deleteUser(id)
    .then((res) => this.componentDidMount())
    .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <SavedDonors savedDonors={this.state.savedDonors}
        handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default DonorPage;
