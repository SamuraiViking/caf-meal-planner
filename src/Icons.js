import React from 'react'
import * as CafData from './cafData.json'


const Icon = (props) => {
    return <img src={props.image} alt="hoarse"/>
}

const Icons = (props) => {
    let icons = []
    Object.keys(props.icons).forEach((icon, i) => {
        let image = CafData[0].cor_icons[icon].image
        icons.push(
            <Icon key={i} image={image} />
        )
    })
    return icons
}

export default Icons