import React from 'react'
import '../assets/scss/components/ControlButton.scss'

export function ControlButton({ changeState, state }){
    const toggleGame = ()=>{
        const select = document.getElementsByClassName('select')[0];
        const selectValue = select.value;
        if (selectValue){
            changeState(!state);
        }else{
            select.classList.add('select--error');
        }
    }
    return (
        <button type='button' onClick={toggleGame} className={`control-button ${state ? 'control-button--red' : ''}`}>{state ? 'Stop' : 'Start'}</button>
    )
}