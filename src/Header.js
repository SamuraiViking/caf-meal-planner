import React from 'react'
import MealSelector from './MealSelector'
import Alert from 'react-bootstrap/Alert'

const Header = (props) => {
    const Warning = () => {
        if(props.diets.includes(1) && props.diets.includes(4)) {
            return (
                <Alert className="warning" variant='primary'>
                    You won't see any
                    <div className="icon center mb-10">
                        <img src="https://legacy.cafebonappetit.com/assets/cor_icons/menu-item-type-c9d18b.png?v=1528869517"alt="vegitarian"/>
                    </div> 
                    because
                    <div className="icon center mb-10">
                            <img src="https://legacy.cafebonappetit.com/assets/cor_icons/menu-item-type-668e3c.png?v=1528869577" alt="vegan"/>
                    </div>
                    is selected
                </Alert>
            )    
        }
        return null
    }
    return (
        <div className="header">
            <div className="container">
                <div>
                    <p>{props.label}</p>
                </div>
                <div className="times">
                    <p>{props.starttime} am - {props.endtime} pm </p>
                </div>
                <MealSelector 
                    setMeal={props.setMeal}
                    setDiets={props.setDiets}
                    diets={props.diets}
                />
                <Warning />
            </div>
        </div>
    )
} 

export default Header;