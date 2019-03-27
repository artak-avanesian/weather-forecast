const weeklyForecastReducer = (state={}, action) => {
    switch (action.type) {
        case "GET_WEEKLY_FORECAST_DATA":
            return action.weeklyForecastData
        default:
            return state
    }
}

export default weeklyForecastReducer