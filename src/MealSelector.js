import React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'

const MealSelector = (props) => {
    const handleChange = (selectedMeal) => {
        props.setSelectedMeal(selectedMeal)
    }
    return (
        <div className="meal-selector">
            <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" defaultValue={"breakfast"} onChange={handleChange}>
                    <ToggleButton value={"breakfast"}>Breakfast</ToggleButton>
                    <ToggleButton value={"lunch"}>Lunch</ToggleButton>
                    <ToggleButton value={"dinner"}>Dinner</ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
        </div>
    )
}

export default MealSelector