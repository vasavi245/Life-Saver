import axios from "axios";

export default {
    getDonors: function() {
        return axios.get("http://localhost:5000/users/");
    },
    
    donorPage: function (savedDonors) {
        return axios.post("/api/donors", savedDonors)
    }

}