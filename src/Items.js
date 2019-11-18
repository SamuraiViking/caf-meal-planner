import React from 'react'
import * as CafData from './cafData.json'


const Item = (props) => {
    const vegiterian = '1' in props.type
    const vegan = '4' in props.type
    return (
        <div>
            <span>{props.label}</span>
            <span className="icon">{props.vegan}</span>
            {
                vegiterian ?
                <img src="https://legacy.cafebonappetit.com/assets/cor_icons/menu-item-type-c9d18b.png?v=1528869517" alt="vegitarian"/>
                :
                null
            }
            {
                vegan ?
                <img src="https://legacy.cafebonappetit.com/assets/cor_icons/menu-item-type-668e3c.png?v=1528869577" alt="vegan" />
                :
                null
            }
            <span className="icon">{props.vegiterian}</span>
        </div>
    )
}

const Items = (props) => {
    let items = []
    props.itemIDs.forEach(function(itemID) {
        let item = CafData[0].items[itemID];
        if(item.tier === 1) {
            items.push(
                <Item 
                    label={item.label}
                    type={item.cor_icon}
                />
            )
        }
    })
    return items
}

export default Items
