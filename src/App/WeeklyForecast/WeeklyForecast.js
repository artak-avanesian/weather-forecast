import React, {Component} from 'react'
import { connect } from 'react-redux'

const API_KEY = '3202afc9748ff0709631c6435eeefc3a'

class WeeklyForecast extends Component {

    async componentDidMount() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${this.props.weatherData.id}&appid=${API_KEY}`)
        const weeklyForecastData = await response.json()

        this.props.dispatchGetWeeklyForecastData(weeklyForecastData)
    }

    render() {
        const {
            weeklyForecastData
        } = this.props
        console.log(weeklyForecastData.city.name, 'render')
        return (
            <div>
                {/* <p>{weeklyForecastData.city.name}</p> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weatherData: state.cityWeatherData,
        weeklyForecastData: state.weeklyForecastData
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchGetWeeklyForecastData: data => dispatch({
        type: "GET_WEEKLY_FORECAST_DATA",
        weeklyForecastData: data
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeeklyForecast)