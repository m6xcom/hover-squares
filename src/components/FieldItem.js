import React, {useEffect, useState} from 'react'
import '../assets/scss/components/FieldItem.scss'

export function FieldItem({col , row , state , setHoveredSquares, hoveredSquares}){
    const [color, setColor] = useState('white');

    const changeColor = ()=>{
        if (state){
            let newHoveredSquaresArr
            if (color === 'white'){
                setColor('blue');
                newHoveredSquaresArr = [...hoveredSquares, { id:`${row}${col}`, row, col}].sort((x, y)=> x.row - y.row || x.col - y.col);
            }else{
                setColor('white');
                newHoveredSquaresArr = hoveredSquares.filter((el)=>el.id !== `${row}${col}`);
            }
            setHoveredSquares(newHoveredSquaresArr)
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