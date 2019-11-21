import React from 'react'
import * as CafData from './cafData.json'


const Icon = (props) => {
    return (
        <div className="icon">
            <img src={props.image} alt="hoarse"/>
        </div>
    )
}

const Icons = (props) => {
    let icons = []
    Object.keys(props.icons).forEach((icon, i) => {
        let image = CafData[0].cor_icons[icon].image
        icons.push(
            <Icon key={i} image={image} />
        )
    })
    return <div className="icons">{icons}</div>
}

export default Icons