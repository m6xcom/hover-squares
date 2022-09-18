import React from 'react'
import {HoveredListItem} from "./HoveredListItem";
import '../assets/scss/components/HoveredList.scss';

export function HoveredList({hoveredSquares}){
    return (
        <div className='hovered-list'>
            <span className='hovered-list__title'>Hover squares</span>
            <ul className="hovered-list__list">
                {hoveredSquares.map((el)=>{
                    return <HoveredListItem col={el.col} row={el.row} key={`${el.col}${el.row}-item`}/>
                })}
            </ul>
        </div>
    )
}