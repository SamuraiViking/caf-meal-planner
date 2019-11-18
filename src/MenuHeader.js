import React from 'react'

const MenuHeader = (props) => {
    return (
        <div>
            <h1>{props.label}</h1>
            <h1>{props.starttime}</h1>
            <h1>{props.endtime}</h1>
        </div>
    )
} 

export default MenuHeader;