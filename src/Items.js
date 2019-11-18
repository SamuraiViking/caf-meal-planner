import React from 'react'
import * as CafData from './CafData.json'


const Item = (props) => {
    return (
        <span>{CafData[0].items[props.item].label}</span>
    )
}

const Items = (props) => {
    return (
        <ul>
            {
                props.items ?
                props.items.map((item) => (
                    <li>
                        <Item
                            item={item}
                        />
                    </li>
                ))
                :
                ""
            }
        </ul>
    )
}

export default Items
