import React from 'react'
import * as CafData from './cafData.json'
import Icons from './Icons'

const Item = (props) => {
    return (
        <div>
            <span>{props.label}</span>
            <Icons icons={props.icons}/>
            <br/>
            <span>{props.description}</span>
            <span className="icon">{props.vegiterian}</span>
        </div>
    )
}

const unfilteredItem = (item, filters) => {
    if (!filters.tiers.includes(Number(item.tier))) return false
    return true
}

const Items = (props) => {
    let items = []
    props.itemIDs.forEach((itemID, i) => {
        let item = CafData[0].items[itemID];
        let filters = {
            tiers: [1, 2, 3]
        }
        if(unfilteredItem(item, filters)) {
            items.push(
                <Item
                    key={i}
                    label={item.label}
                    icons={item.cor_icon}
                    description={item.description}
                />
            )
        }
    })
    return items
}

export default Items
