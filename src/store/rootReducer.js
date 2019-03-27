import weatherDataReducer from './../reducers/weatherDataReducer'
import weeklyForecastReducer from './../reducers/weeklyForecastReducer'

const rootReducer = (state={}, action) => {
    return {
        cityWeatherData: weatherDataReducer(state.cityWeatherData, action),
        weeklyForecastData: weeklyForecastReducer(state.weeklyForecastData, action)
    }  
}

export default rootReducer