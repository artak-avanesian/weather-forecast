import weatherDataReducer from './../reducers/weatherDataReducer'
import weeklyForecastReducer from './../reducers/weeklyForecastReducer'
import citiesReducer from './../reducers/citiesReducer'

const rootReducer = (state={}, action) => {
    return {
        cityWeatherData: weatherDataReducer(state.cityWeatherData, action),
        weeklyForecastData: weeklyForecastReducer(state.weeklyForecastData, action),
        cities: citiesReducer(state.cities, action)
    }  
}

export default rootReducer