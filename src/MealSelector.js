import React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap'

const MealSelector = (props) => {
    const handleMealChange = (selectedMeal) => {
        props.setMeal(selectedMeal)
    }
    const handleDietChange = (selectedDiet) => {
        let diet = props.diet === selectedDiet ? "any" : selectedDiet
        props.setDiet(diet)

    }
    const test = (selectedDiet) => {
        console.log(props.diet)
    }
    return (
        <div id="selectors">
            <div className="selector">
                <ButtonToolbar>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={"breakfast"} onChange={handleMealChange}>
                        <ToggleButton style={{ width: '90px', borderRadius: '5px 0 0 0'}} value={"breakfast"}>Breakfast</ToggleButton>
                        <ToggleButton style={{ width: '90px', borderRadius: '0px'}} value={"lunch"}>Lunch</ToggleButton>
                        <ToggleButton style={{ width: '90px', borderRadius: '0 5px 0 0'}} value={"dinner"}>Dinner</ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={"breakfast"} onChange={handleDietChange}>
                        <ToggleButton style={{ width: '68px', borderRadius: '0 0 0 5px'}} value={"any"}>
                            <div className="icon center mb-10">
                                Any
                            </div>
                        </ToggleButton>
                        <ToggleButton style={{ width: '68px', borderRadius: '0px'}} value={"vegan"}>
                            <div className="icon center mb-10">
                                <img src="https://legacy.cafebonappetit.com/assets/cor_icons/menu-item-type-668e3c.png?v=1528869577" alt="vegan"/>
                            </div>
                        </ToggleButton>
                        <ToggleButton style={{ width: '68px', borderRadius: '0px'}} value={"vegitarian"}>
                            <div className="icon center mb-10">
                                <img src="https://legacy.cafebonappetit.com/assets/cor_icons/menu-item-type-c9d18b.png?v=1528869517"alt="vegitarian"/>
                            </div>
                        </ToggleButton>
                        <ToggleButton style={{ width: '67px', borderRadius: '0 0 5px 0'}} value={"gluton free"}>
                            <div className="icon center mb-10">
                                <img src="https://legacy.cafebonappetit.com/assets/cor_icons/menu-item-type-ce9d00.png?v=1528869625" alt="gluton free"/>
                            </div>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </div>
        </div>
    )
}

export default MealSelector