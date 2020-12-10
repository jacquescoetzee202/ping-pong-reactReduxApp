// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://restful.training/api/ping-pong/games",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer 8|VK34uDZiZDlqxqjptja2YtDwql0qLFltEeNU3mPF",
    },
});