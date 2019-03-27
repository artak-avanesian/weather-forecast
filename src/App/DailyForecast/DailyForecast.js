import React, { Component } from 'react';
import DetailForecast from './DetailForecast/DetailForecast'
import { connect } from 'react-redux'
import { keys } from 'lodash'
import './DailyForecast.css'

const API_KEY = '3202afc9748ff0709631c6435eeefc3a'

class DailyForecast extends Component {

    state = {
        value: '',
        cities: {}
    }

    async fetchWeatherData(url) {
        const response = await fetch(url)
        const weatherData = await response.json()

        this.props.dispatchGetWeatherData(weatherData)
    }

    getLastCities = () => {
        const city = this.state.value
        this.setState(prevState => ({
            cities: {
                ...prevState.cities,
                [city]: city
            }
        }))
    }

    valueChangeHandler = event => {
        this.setState({
            value: event.target.value
        })
    }

    handlerKeyPress = event => {
        if (event.key === 'Enter') {
            this.fetchWeatherData(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${API_KEY}`)
            this.getLastCities()
        }
    }

    showCityForecast = (array, index) => {
        const value = array.filter((item, i) => {
            return i === index
        })
        this.fetchWeatherData(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`)
    }
    
    cities = keys(this.state.cities)

    render() {
        const {
            weatherData
        } = this.props
        let cities = keys(this.state.cities)
        console.log(cities)
        if (cities.length > 5) {
            cities.shift()
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
                            <li key={index} onClick={() => this.showCityForecast(cities, index)}>            {city.toLowerCase()}
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
        weatherData: state.cityWeatherData
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchGetWeatherData: data => dispatch({
        type: "GET_WEATHER_DATA",
        weatherData: data
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DailyForecast);
