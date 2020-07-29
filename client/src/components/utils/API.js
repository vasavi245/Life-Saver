import axios from "axios";

export default {
    // get the users to display
    getUsers: function() {
        return axios.get("/users");
    }
}