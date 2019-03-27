const weatherDataReducer = (state=null, action) => {
    switch (action.type) {
        case "GET_WEATHER_DATA":
            return action.weatherData
        default:
            return state
    }
}

export default weatherDataReducer