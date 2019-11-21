import React, { useState } from 'react'
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
    return true
}

const Items = (props) => {
    const [showMoreItems, setShowMoreItems] = useState(false)
    const [btnText, setBtnText] = useState("show more")
    let items = []
    let moreItems = []
    props.itemIDs.forEach((itemID, i) => {
        let item = CafData[0].items[itemID];
        let filters = {
            tier: 1,
        }
        if(unfilteredItem(item, filters)) {
            let itemElem = (
                <Item
                key={i}
                tier={item.tier}
                label={item.label}
                icons={item.cor_icon}
                description={item.description}
                />
            )
            Number(item.tier) === 1 ?
                items.push(itemElem)
                :
                moreItems.push(itemElem)
        }
    })
    const handleClick = () => {
        setShowMoreItems(!showMoreItems)
        let newBtnText = ""
        newBtnText = btnText === "show more" ? "show less" : "show more"
        setBtnText(newBtnText)
    }
    return (
        <div className="items">
            {items}
            { showMoreItems ? moreItems : null }
            { moreItems.length > 0 ? <div onClick={handleClick} >{btnText}</div> : null }
        </div>
    )
}

export default Items
