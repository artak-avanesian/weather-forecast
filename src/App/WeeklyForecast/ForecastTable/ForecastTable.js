import React from 'react'
import './ForecastTable.css'

const ForecastTable = ({
    weatherData,
    getDayOfWeek,
    getDate,
    getPrecipitationData
}) => {
    const date = new Date();
    return (
        <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Temperature<span className='table-glyph'>L</span></th>
                        <th scope="col">Pressure<span className='table-glyph pressure'>N</span></th>
                        <th scope="col">Humidity<span className='table-glyph humidity'>C</span></th>
                        <th scope="col">Wind<span className='table-glyph wind'>I</span></th>
                        <th scope="col">Precipitation<span className='glyph3'>A</span></th>
                        <th scope="col">Cloudiness<span className='table-glyph cloudiness'>A</span></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        weatherData.map((item, index) => (
                            <tr key={index} className='tab-row'>
                                <th>{getDayOfWeek(index)}
                                    <small>{getDate(date.getFullYear(), date.getDate() + index + 1, date.getMonth())}</small><br/>
                                    <small>{item['weather'][0]['description']}</small>
                                </th>
                                <td>{Math.round(item['main']['temp'] - 273.15)}&#176;</td>
                                <td>{Math.round(item['main']['pressure'])} mb</td>
                                <td>{item['main']['humidity']} %</td>
                                <td>{item['wind']['speed']} km/h</td>
                                <td>{getPrecipitationData(item)} cm</td>
                                <td>{item['clouds']['all']} %</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    )
};

export default ForecastTable