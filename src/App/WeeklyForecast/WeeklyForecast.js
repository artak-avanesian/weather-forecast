import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from "./Loader/Loader";
import ForecastTable from './ForecastTable/ForecastTable';
import './WeeklyForecast.css';

const API_KEY = '3202afc9748ff0709631c6435eeefc3a';

class WeeklyForecast extends Component {

    async componentDidMount() {
        const id = this.props.weatherData !== null ? this.props.weatherData.id : '000000';
        const week = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}`)
            .then(resp => resp.json())
            .catch(error => console.log(error.name));
        this.props.getWeeklyForecastData(week)
    };

    getWeekdayData = (num) => {
        const date = new Date();
        date.setDate(date.getDate() + num + 1);
        return new Date(date)
    };

    getDayOfWeek = (num) => {
        let options = {
            weekday: 'long',
        };
        return this.getWeekdayData(num).toLocaleString('en-US', options);
    };

    getDate = (num) => {
        let options = {
            month: 'short',
            day: 'numeric'
        };
        return this.getWeekdayData(num).toLocaleString('en-US', options).toUpperCase()
    };

    getPrecipitationData = (obj) => {
        if (obj.snow && obj.snow['3h']) return Math.round(obj.snow['3h'] * 10);
        else if (!obj.snow || !('3h' in obj.snow)) return 0
    };

    render() {
        const {
            weeklyForecastData,
            weatherData
        } = this.props;

        if (weatherData === null) return (
            <Link to='/' className='back'><span className='glyph2'>D</span></Link>
        );
        else if (!('city' in weeklyForecastData)) return <Loader/>;

        const weatherDataForWeek = weeklyForecastData['list'].filter((item, index) => {
            return index === 0 || index === 6 || index === 13 || index === 19 ||
            index === 26 || index === 33 || index === 39
        });

        return (
            <div className='weekly-forecast'>
                <Link to='/'>
                    <span className='glyph2'>D </span>
                    <span className='back-label'>Back to daily forecast</span>
                </Link>
                <p>{weatherData.name}, {weatherData.sys.country}</p>
                <ForecastTable
                    weatherData={weatherDataForWeek}
                    getDayOfWeek={this.getDayOfWeek}
                    getDate={this.getDate}
                    getPrecipitationData={this.getPrecipitationData}
                />
            </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weeklyForecastData: state.weeklyForecastData,
        weatherData: state.cityWeatherData
    }
};

const mapDispatchToProps = dispatch =>  ( {
    getWeeklyForecastData: data => dispatch({
        type: "GET_WEEKLY_FORECAST_DATA",
        weeklyForecastData: data
    }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(WeeklyForecast))