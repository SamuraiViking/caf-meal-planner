import React from 'react'
import * as CafData from './cafData.json'
import Icons from './Icons'
import Button from 'react-bootstrap/Button';


const Item = (props) => {
    return (
        <div className="item">
            <div className="upper">
                <div>
                    <span>{props.label}</span>
                </div>
                <div className="right">
                    <Icons icons={props.icons}/>
                    <Button size="sm">Eat!</Button>
                </div>
            </div>
            <div className="description">
                <span>{props.description}</span>
            </div>
        </div>
    )
}

const unfilteredItem = (item, filters) => {
    if (filters.tier === Number(item.tier)) return true
    else if (filters.icon in item.cor_icon) return true
    return false
}

const Items = (props) => {
    let items = []
    props.itemIDs.forEach((itemID, i) => {
        let item = CafData[0].items[itemID];
        let filters = {
            tier: 1,
            icon: "4"
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
    return <div className="items">{items}</div>
}

export default Items
