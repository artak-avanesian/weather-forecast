import React, { Component } from 'react';
import DetailForecast from './DetailForecast/DetailForecast'
import { connect } from 'react-redux'
import './DailyForecast.css'

const API_KEY = '3202afc9748ff0709631c6435eeefc3a'

class DailyForecast extends Component {

    state = {
        value: '',
    }

    async fetchWeatherData(url) {
        const response = await fetch(url)
        const weatherData = await response.json()

        this.props.dispatchGetWeatherData(weatherData)
    }

    async fetchWeeklyForecast() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${this.props.weatherData.id}&appid=${API_KEY}`)
        const weeklyForecastData = await response.json()
    
        this.props.dispatchGetWeeklyForecastData(weeklyForecastData)
    }

    getLastCities = () => {
        if(this.props.weatherData.name && (this.props.weatherData.name.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1)) {
            if (this.props.cities.indexOf(this.state.value) === -1) {
                this.props.dispatchAddCity(this.state.value)
            }
        }
    }

    deleteCity = () => {
        this.props.dispatchDeleteCity()
    }

    valueChangeHandler = event => {
        this.setState({
            value: event.target.value
        })
    }

    handlerKeyPress = async event => {
        if (event.key === 'Enter') {
            await this.fetchWeatherData(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${API_KEY}`)
            await this.getLastCities()
            await this.fetchWeeklyForecast()
            this.setState({
                value: ''
            })
        }
    }

    showCityForecast = async (array, index) => {
        const currentCity = array.filter((item, i) => {
            return i === index
        })
        await this.fetchWeatherData(`http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}`)
        await this.fetchWeeklyForecast()
    }

    render() {
        const {
            weatherData,
            cities
        } = this.props
        if (cities.length > 5) {
            this.deleteCity()
        }
        return (
            <div>
                <div className="input-group mt-3 mb-3">
                    <input
                        className="form-control"
                        type='search'
                        placeholder='City name'
                        value={this.state.value}
                        onChange={this.valueChangeHandler}
                        onKeyPress={this.handlerKeyPress}
                    />
                </div>
                <ul className='city-list'>
                    {
                        cities.map((city, index) => (
                            <li key={city} onClick={() => this.showCityForecast(cities, index)}>            {city.toLowerCase()} 
                            </li>
                        ))
                    }
                </ul> 
            {
                weatherData && weatherData.message !== 'Nothing to geocode' ? <DetailForecast/> : null
            }
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weatherData: state.cityWeatherData,
        cities: state.cities
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchGetWeatherData: data => dispatch({
        type: "GET_WEATHER_DATA",
        weatherData: data
    }),
    dispatchGetWeeklyForecastData: data => dispatch({
        type: "GET_WEEKLY_FORECAST_DATA",
        weeklyForecastData: data
    }),
    dispatchAddCity: city => dispatch({
        type: "ADD_CITY",
        city
    }),
    dispatchDeleteCity: () => dispatch({
        type: "DELETE_CITY"
    }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DailyForecast)