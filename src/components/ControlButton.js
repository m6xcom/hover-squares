import React from 'react'
import '../assets/scss/components/ControlButton.scss'

export function ControlButton({ changeState, state , select }){
    const toggleGame = ()=>{
        const selectEl = select.current;
        const selectValue = selectEl.value;
        if (selectValue){
            changeState(!state);
        }else{
            selectEl.classList.add('select--error');
        }
    }
    return (
        <button type='button' onClick={toggleGame} className={`control-button ${state ? 'control-button--red' : ''}`}>{state ? 'Stop' : 'Start'}</button>
    )
}