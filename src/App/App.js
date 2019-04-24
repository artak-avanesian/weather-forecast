import React from 'react';
import { Route } from 'react-router-dom';
import DailyForecast from './DailyForecast/DailyForecast';
import WeeklyForecast from './WeeklyForecast/WeeklyForecast';
import './App.css';

const  App = () => {
    return (
        <div className='App'>
            <Route path='/' exact component={DailyForecast}/>
            <Route path={`/weekly-forecast`} component={WeeklyForecast}/>
        </div>
    );
};

export default App
