import React from 'react'
import DailyForecast from './DailyForecast/DailyForecast'
import { Route } from 'react-router-dom'
import WeeklyForecast from './WeeklyForecast/WeeklyForecast'
import './App.css'

const  App = () => (
    <div className='App'>
        <Route path='/' exact component={DailyForecast}/>
        <Route path='/weekly-forecast' component={WeeklyForecast}/>
    </div>
)

export default App
