import React from 'react';
import './App.css';
import * as CafData from './cafData.json';
import Menu from './Menu';

const App = () => {
  const dayparts = CafData[0].days[0].cafes[261].dayparts[0]
  const breakfast = dayparts[0]
  const lunch = dayparts[1]
  const dinner = dayparts[2]

  return (
    <div className="App">
      <Menu
        label={breakfast.label}
        starttime={breakfast.starttime}
        endtime={breakfast.endtime}
        stations={breakfast.stations}
      />
      <Menu
        label={lunch.label}
        starttime={lunch.starttime}
        endtime={lunch.endtime}
        stations={lunch.stations}
      />
      <Menu
        label={dinner.label}
        starttime={dinner.starttime}
        endtime={dinner.endtime}
        stations={dinner.stations}
      />
    </div>
  );
}

export default App;
