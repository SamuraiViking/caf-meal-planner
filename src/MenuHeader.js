import React from 'react'

const MenuHeader = (props) => {
    return (
        <div className="menu-header">
            <div>
                <p>{props.label}</p>
            </div>
            <div className="times">
                <p>{props.starttime} am - {props.endtime} pm </p>
            </div>
        </div>
    )
} 

export default MenuHeader;