import React from 'react'
import Items from './Items'


const Station = (props) => {
    return (
        <div>
            <h1>{props.label}</h1>
            <Items 
                items={props.items}
            />
        </div>
    )
}

const Stations = (props) => {
    return (
        props.stations ? 
        props.stations.map((station) => (
            <Station 
                key={station.id}
                label={station.label}
                items={station.items}
            />
        ))
        :
        ""
    )
}

export default Stations;