import axios from "axios"

const instance = axios.create ({
    baseURL: "https://api.themoviedb.org/3"
})
//axios le masnesat

// instance.get("movie/top_rated")
//api.themoviedb.org/3/movie/top_rated this is what we r getting
export default instance