import "./App.css";
import React, { useState } from "react";
import moodData from "./api/data";

import Chart from "./components/chart";
import DataForm from "./components/dataForm";


function App() {
  const initialMood = moodData;
  const [mood, setMood] = useState(initialMood);

  const handleSubmit = (values) => {
    for (let prop in values) {
      if (prop !== 'date') {
        values[prop] = Number(values[prop])
      }
    }
    mood.push(values);
    setMood([...mood]);
    
  };
  return (
    <div>
      <h1 className="m-10 text-2xl font-bold underline">
        Mood/Energy/WorkingHours Tracker
      </h1>
      <Chart moodDatas={mood} />
      <DataForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
