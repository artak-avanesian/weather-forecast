import React from 'react'
import DailyForecast from './DailyForecast/DailyForecast'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import WeeklyForecast from './WeeklyForecast/WeeklyForecast'
import './App.css'

const  App = ({
    weeklyForecastData,
    weatherData
}) => (
    <div className='App'>
        <Route path='/' exact component={DailyForecast}/>
        <Route path='/weekly-forecast' render={() => <WeeklyForecast
            weeklyForecastData={weeklyForecastData}
            weatherData={weatherData}
        />}/>
    </div>
)

const mapStateToProps = state => {
    return {
        weeklyForecastData: state.weeklyForecastData,
        weatherData: state.cityWeatherData
    }
} 

export default connect(
    mapStateToProps
)(App);
