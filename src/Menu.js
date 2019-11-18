import React from 'react'
import Stations from './Stations'
import MenuHeader from './MenuHeader'

const Menu = (props) => {
    return (
        <div>
            <MenuHeader
                label={props.label}
                // starttime={props.starttime}
                // endtime={props.endtime}
            />
            <Stations
                stations={props.stations}
            />
        </div>
    );
}

export default Menu