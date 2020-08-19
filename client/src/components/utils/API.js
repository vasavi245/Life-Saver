import axios from "axios";

export default {
    // get the users to display
    getUsers: function() {
        const token = localStorage.getItem("auth-token")
        return axios.get("/users/donors",{headers: {"x-auth-token": token}} );
    },

    deleteUser: function(id) {
        const token = localStorage.getItem("auth-token");
        return axios.delete("/users/" + id, {headers: {"x-auth-token": token}});
    }


    
}