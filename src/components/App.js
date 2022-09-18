import React, {useEffect, useState, useRef} from "react";
import {Select} from "./Select";
import {ControlButton} from "./ControlButton";
import {Field} from "./Field";
import {HoveredList} from "./HoveredList";
import '../assets/scss/components/App.scss';

function App() {
  const [mode, changeMode] = useState(5);
  const [isStarted , setIsStarted] = useState(false);
  const [hoveredSquares , setHoveredSquares] = useState([]);
  const select = useRef(null);

  useEffect(()=>{
      setHoveredSquares([]);
  }, [isStarted])

  useEffect(()=>{
      setIsStarted(false);
  },[mode])

  return (
    <div className="app">
        <div className="app__header">
            <Select changeMode={changeMode} selectRef={select}/>
            <ControlButton changeState={setIsStarted} state={isStarted} select={select}/>
        </div>
        <div className="app__body">
            <Field hoveredSquares={hoveredSquares} setHoveredSquares={setHoveredSquares} mode={Number(mode)} state={isStarted}/>
        </div>
        <div className="app__sidebar">
            <HoveredList hoveredSquares={hoveredSquares}/>
        </div>
    </div>
  );
}

export default App;
