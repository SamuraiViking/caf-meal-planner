import React, {useState} from 'react';
import './App.scss';
import * as CafData from './cafData.json';
import Menu from './Menu';
import Header from './Header'

const App = () => {
  const [selectedMeal, setSelectedMeal] = useState("breakfast")

  const dayparts = CafData[0].days[0].cafes[261].dayparts[0]
  const breakfast = dayparts[0]
  const lunch = dayparts[1]
  const dinner = dayparts[2]
  const date = CafData[0].days[0].date

  const meals = {
    "breakfast": breakfast,
    "lunch": lunch,
    "dinner": dinner,
  }

  return (
    <div className="App">
      <Header 
        label={meals[selectedMeal].label}
        starttime={meals[selectedMeal].starttime}
        endtime={meals[selectedMeal].endtime}
        setSelectedMeal={setSelectedMeal}
      />
      <Menu
        stations={meals[selectedMeal].stations}
        date={date}
      />
    </div>
  );
}

export default App;
