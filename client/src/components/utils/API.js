import axios from "axios";

export default {
    getDonors: function() {
        return axios.get("/donors");
    },
    
    donorPage: function (savedDonors) {
        return axios.post("/donors", savedDonors)
    }

}