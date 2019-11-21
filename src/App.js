import React, {useState} from 'react';
import './App.scss';
import * as CafData from './cafData.json';
import Menu from './Menu';
import Header from './Header'

const App = () => {
  const [meal, setMeal] = useState("breakfast")
  const [diet, setDiet] = useState("any")

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

  const diets = {
    "vegan": '4',
    "vegitarian": '1',
    "gluton free": '9',
    "any": "any"
  }

  return (
    <div className="App">
      <Header 
        label={meals[meal].label}
        starttime={meals[meal].starttime}
        endtime={meals[meal].endtime}
        setMeal={setMeal}
        setDiet={setDiet}
      />
      <Menu
        stations={meals[meal].stations}
        diet={diets[diet]}
        date={date}
      />
    </div>
  );
}

export default App;
