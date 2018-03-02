const API_KEY = "fb011f7c8f1a48928b3150132180103";
const API_URL = "https://api.apixu.com/v1/current.json?";

// Obtaining the current Weather info.
export const getCurrentWeather = (params) =>{
    return fetch(`${API_URL}key=${API_KEY}&q=${params.lat},${params.lgn}`)
        .then((response)=>{
            return response.json();
        })
        .then((responseJson)=>{
            return responseJson;
        })
        .catch((error)=>{
            console.error(error);
        });
};
