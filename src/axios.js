import axios from "axios";

// axios is an javascript library which actually makes an http request from the code
// base url to make requests to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

// instance.get('foo-bar')
// basiclly foo-bar willbe appened to the base url

export default instance;