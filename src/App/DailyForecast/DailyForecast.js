import React, { Component } from 'react';
import DetailForecast from './DetailForecast/DetailForecast'
import { connect } from 'react-redux'
import './DailyForecast.css'

const API_KEY = '3202afc9748ff0709631c6435eeefc3a';

class DailyForecast extends Component {

    state = {
        value: ''
    };

    async fetchWeatherData(city) {
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(resp => resp.json())
            .catch(error => console.log(error.message));

        this.props.getWeatherData(weatherData)
    }

    getLastCities = () => {
        if(this.props.weatherData.name && (this.props.weatherData.name.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1)) {
            if (this.props.cities.indexOf(this.state.value) === -1) {
                this.props.addCity(this.state.value)
            }
        }
    };

    valueChangeHandler = event => {
        this.setState({
            value: event.target.value
        })
    };

    handlerKeyPress = async event => {
        if (event.key === 'Enter' && this.state.value) {
            await this.fetchWeatherData(this.state.value);
            await this.getLastCities();
            this.setState({
                value: ''
            })
        }
    };

    showCityForecast = async (array, index) => {
        const currentCity = array.filter((item, i) => {
            return i === index
        });
        await this.fetchWeatherData(currentCity)
    };

    render() {
        const {
            weatherData,
            cities,
            deleteCity
        } = this.props;

        if (cities.length > 5) {
            deleteCity()
        }

        return (
            <div>
                <div className="input-group mt-3 mb-3">
                    <input
                        className="form-control"
                        type='text'
                        placeholder='City name'
                        value={this.state.value}
                        onChange={this.valueChangeHandler}
                        onKeyPress={this.handlerKeyPress}
                    />
                </div>
                <ul className='city-list'>
                    {
                        cities.map((city, index) => (
                            <li key={city} onClick={() => this.showCityForecast(cities, index)}>{city.toLowerCase()}
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
};

const mapDispatchToProps = dispatch => ({
    getWeatherData: data => dispatch({
        type: "GET_WEATHER_DATA",
        weatherData: data
    }),
    addCity: city => dispatch({
        type: "ADD_CITY",
        city
    }),
    deleteCity: () => dispatch({
        type: "DELETE_CITY"
    }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DailyForecast)