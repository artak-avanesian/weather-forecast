import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ForecastTable from './ForecastTable/ForecastTable'
import {withRouter} from 'react-router-dom'
import './WeeklyForecast.css'
import Loader from "./Loader/Loader";

const API_KEY = '3202afc9748ff0709631c6435eeefc3a';

class WeeklyForecast extends Component {

    async componentDidMount() {
        const id = this.props.weatherData !== null ? this.props.weatherData.id : '000000';
        const week = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}`)
            .then(resp => resp.json())
            .catch(error => console.log(error.name));
        this.props.dispatchGetWeeklyForecastData(week)
    };

    getDayOfWeek = (num) => {
        const date = new Date();
        let day;
        for (let i = 0; i < 7; i++) {
            if (i === num) {
                day = date.getDay() + i + 1;
            }
        }
        if (day > 7) day = day - 7;

        if(day === 1) return 'Monday';
        else if(day === 2) return 'Tuesday';
        else if(day === 3) return 'Wednesday';
        else if(day === 4) return 'Thursday';
        else if(day === 5) return 'Friday';
        else if(day === 6) return 'Saturday';
        else return 'Sunday'
    };

    getDate = (year, day, month) => {
        const date = new Date(year, month, day);
        const mon = date.getMonth() + 1;
        let monthDay = date.getDate();
        let monthName;
        for (let i = 1; i < 13; i++) {
            if (mon === 1) monthName = 'JAN';
            else if (mon === 2) monthName = 'FEB';
            else if (mon === 3) monthName = 'MAR';
            else if (mon === 4) monthName = 'APR';
            else if (mon === 5) monthName = 'MAY';
            else if (mon === 6) monthName = 'JUN';
            else if (mon === 7) monthName = 'JUL';
            else if (mon === 8) monthName = 'AUG';
            else if (mon === 9) monthName = 'SEP';
            else if (mon === 10) monthName = 'OCT';
            else if (mon === 11) monthName = 'NOV';
            else monthName = 'DEC'
        }
        if (monthDay < 10) monthDay = `0${monthDay}`;
        return `${monthName} ${monthDay}`
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
    dispatchGetWeeklyForecastData: data => dispatch({
        type: "GET_WEEKLY_FORECAST_DATA",
        weeklyForecastData: data
    }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(WeeklyForecast))