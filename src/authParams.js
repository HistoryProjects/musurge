import axios from "axios";

const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:7020";
export const clientId = "d48c4c3ba7a04a3dbeda7568ac785b5d";
export const clientSecret = "204c3978920c4ee1abc013bc8d1362b7";

export const scopes = [
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state",
      "user-read-private",
      "user-read-email",
      "user-read-playback-position", 
      "user-library-read", 
      "streaming", 
      "playlist-read-private"
];


export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
 

const apiClient = axios.create({
    baseURL: "https://api.spotiy.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization = "Bearer " + token;
        return config;
    })
}

export default apiClient;