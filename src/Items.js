import React from 'react'
import * as CafData from './cafData.json'


const Item = (props) => {
    const vegiterian = '1' in props.diet
    const vegan = '4' in props.diet
    const glutenFree = '9' in props.diet
    return (
        <div>
            <span>{props.label}</span>
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
            {
                glutenFree ?
                <img src="https://legacy.cafebonappetit.com/assets/cor_icons/menu-item-type-ce9d00.png?v=1528869625" alt="vegan" />
                :
                null
            }
            <br/>
            <span>{props.description}</span>
            <span className="icon">{props.vegiterian}</span>
        </div>
    )
}

const filterItems = (item, tier) => {
    return Number(item.tier) === 1 
}

const Items = (props) => {
    let items = []
    props.itemIDs.forEach(function(itemID) {
        let item = CafData[0].items[itemID];
        if(filterItems(item, 1)) {
            items.push(
                <Item
                    key={itemID}
                    label={item.label}
                    diet={item.cor_icon}
                    description={item.description}
                />
            )
        }
    })
    return items
}

export default Items
