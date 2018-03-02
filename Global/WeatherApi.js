const API_KEY = "fb011f7c8f1a48928b3150132180103";
const API_FORECAST_URL = "http://api.apixu.com/v1/forecast.json?";

// Obtaining the current Weather info.
export const getCurrentWeather = (params, days) => {

    let DAYS_PARAM = days ? `&days=${days}` : '';

    return fetch(`${API_FORECAST_URL}key=${API_KEY}&q=${params.lat},${params.lgn}${DAYS_PARAM}`)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
};
