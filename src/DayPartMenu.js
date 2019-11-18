import React from 'react'
import Stations from './Stations'

const DayPartMenu = (props) => {
    return (
        <div>
            <h1>{props.label}</h1>
            <h1>{props.starttime}</h1>
            <h1>{props.endtime}</h1>
            <Stations />
        </div>
    );
}

export default DayPartMenu