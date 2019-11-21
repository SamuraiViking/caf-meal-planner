import React from 'react'
import Stations from './Stations'
import './App.scss';

const Menu = (props) => {
    return (
        <div>
            <Stations 
                stations={props.stations} 
                diet={props.diet}
            />
        </div>
    );
}

export default Menu