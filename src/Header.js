import React from 'react'
import MealSelector from './MealSelector'
import Alert from 'react-bootstrap/Alert'

const Header = (props) => {
    const Warning = () => {
        if(props.diets.includes(1) && props.diets.includes(4)) {
            return <Alert className="warning" variant='primary'>No V will appear because VG is selected</Alert>
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