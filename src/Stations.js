import React from 'react'
import Items from './Items'

const Station = (props) => {
    const label = props.label
    const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1)

    return (
        <div className="station">
            <p className="label"><strong>{capitalizedLabel}</strong></p>
            <Items
                itemIDs={props.itemIDs}
                diets={props.diets}
            />
        </div>
    )
}

const Stations = (props) => {
    return (
        props.stations ? 
        props.stations.map((station, i) => (
            <Station 
                key={i}
                label={station.label}
                itemIDs={station.items}
                diets={props.diets}
            />
        ))
        :
        null
    )
}

export default Stations;