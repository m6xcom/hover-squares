import React, {useEffect, useState} from 'react'
import '../assets/scss/components/FieldItem.scss'

export function FieldItem({col , row , state , setHoveredSquares, hoveredSquares}){
    const [color, setColor] = useState('white');

    const changeColor = ()=>{
        if (state){
            if (color === 'white'){
                setColor('blue');
                const sortedArr = [...hoveredSquares, {col, row}].sort((x, y)=> x.row - y.row || x.col - y.col);
                setHoveredSquares(sortedArr)
            }else{
                setColor('white');
                const filteredArr = hoveredSquares.filter((el)=>{
                    const isUncoveredEl = el.col === col && el.row === row;
                    return !isUncoveredEl;
                });
                setHoveredSquares(filteredArr);
            }
        }
    }

    useEffect(()=>{
        setColor('white');
    }, [state])

    return (
        <div
             onMouseOver={changeColor}
             className={`field-item ${color === 'blue' ? 'field-item--blue' : ''}`}>
        </div>
    )
}