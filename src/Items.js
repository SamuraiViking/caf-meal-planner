import React, { useState } from 'react'
import * as CafData from './cafData.json'
import Icons from './Icons'
import Button from 'react-bootstrap/Button';


const Item = (props) => {
    return (
        <div className="item">
            <div className="upper">
                <div className="label">
                    <span>{props.label}</span>
                </div>
                <div>
                    <Icons icons={props.icons}/>
                </div>
            </div>
            <div className="description">
                <span>{props.description}</span>
            </div>
        </div>
    )
}

const unfilteredItem = (item, filters) => {
    if(filters.diet === "any") return true
    if(filters.diet === "1") {
        if("1" in item.cor_icon) return true
        if("4" in item.cor_icon) return true
    }
    return filters.diet in item.cor_icon
}

const Items = (props) => {
    const [showMoreItems, setShowMoreItems] = useState(false)
    const [btnText, setBtnText] = useState("show more")
    let filters = { diet: props.diet }
    let items = []
    let moreItems = []

    props.itemIDs.forEach((itemID, i) => {
        let item = CafData[0].items[itemID];
        if(unfilteredItem(item, filters)) {
            let itemElem = (
                <Item
                    key={i}
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

    const ToggleBtn = (props) => {
        let btn = !props.hasMoreItems ?
            null
            :
            <Button variant="link" className="toggle-btn" onClick={handleClick}>{btnText}</Button>
        return btn
    }

    const MoreItems = (props) => {
        return props.showMoreItems ? moreItems : null
    }

    return (
        <div className="items">
            {items}
            <MoreItems showMoreItems={showMoreItems}/>
            <ToggleBtn hasMoreItems={moreItems.length > 0} />
        </div>
    )
}

export default Items
