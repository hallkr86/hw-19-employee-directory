import axios from "axios";

export default {
    getEmployee: function() {
        console.log("getEmployee");
        return axios.get("https://randomuser.me/api/?results=15&nat=us");
    }
};