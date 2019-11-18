import React from 'react'
import Items from './Items'

const Station = (props) => {
    const label = props.label
    const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1)

    return (
        <div>
            <p><strong>{capitalizedLabel}</strong></p>
            <Items
                itemIDs={props.itemIDs}
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
                itemIDs={station.items}
            />
        ))
        :
        null
    )
}

export default Stations;