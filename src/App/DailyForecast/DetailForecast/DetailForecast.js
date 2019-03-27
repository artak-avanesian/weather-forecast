import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './DetailForecast.css'

const DetailForecast = ({
    weatherData,
}) => {
    if (weatherData.message === 'city not found') {
        return (
            <p>City ​​name is invalid. Please, try again.</p>
        )   
    }
    return (
        <div className='detail-forecast'>
            <p className='city'>{weatherData.name}, {weatherData.sys.country}</p>
            <p className='weather-description'>{weatherData.weather[0].description}</p>
            <p className='temperature'>{Math.round(weatherData.main.temp - 273.15)}&#176;</p>
            <div className='flex-container'>
                <p>
                    <span className='bold'>Pressure:</span><br/>
                    <span className='glyph pressure'>N</span><br/>
                    {weatherData.main.pressure} mb
                </p>
                <p>
                    <span className='bold'>Humidity:</span><br/>
                    <span className='glyph humidity'>C</span><br/> 
                    {weatherData.main.humidity} %
                </p>
                <p>
                    <span className='bold'>Lowest temp.:</span><br/>
                    <span className='glyph low-temp'>L</span><br/> 
                    {Math.round(weatherData.main.temp_min - 273.15)} &#176;C
                </p>
                <p>
                    <span className='bold'>Highest temp.:</span><br/>
                    <span className='glyph high-temp'>L</span><br/> 
                    {Math.round(weatherData.main.temp_max - 273.15)} &#176;C
                </p>
                <p>
                    <span className='bold'>Visibility:</span><br/>
                    <span className='glyph'>B</span><br/> 
                    {Math.round(weatherData.visibility / 1000)} km
                </p>
                <p>
                    <span className='bold'>Wind:</span><br/>
                    <span className='glyph wind'>I</span><br/> 
                    {weatherData.wind.speed} km/h
                </p>
                <p>
                    <span className='bold'>Cloudiness:</span><br/>
                    <span className='glyph cloudiness'>A</span><br/> 
                    {weatherData.clouds.all} %
                </p>
            </div>
            <Link to='/weekly-forecast'>Show weekly forecast</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weatherData: state.cityWeatherData
    }
}

export default connect(
    mapStateToProps
)(DetailForecast)