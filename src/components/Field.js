import React , {useState, useEffect} from 'react'
import {FieldItem} from "./FieldItem";
import '../assets/scss/components/Field.scss'

export function Field({mode , setHoveredSquares, hoveredSquares, state}){
    const [squareArr, setSquareArr] = useState([]);

    useEffect(()=>{
        const tempArr = [];
        for(let i = 0; i < mode ; i++){
            tempArr.push(i + 1);
        }
        setSquareArr(tempArr);
    }, [mode]);

    return (
        <div className={`field ${mode === 5 ? 'field--small' : mode === 15 ? 'field--medium' : 'field--big'}`}>
            {squareArr.map((row)=>{
                return <div key={row} className='field__row'>
                    { squareArr.map((col)=>
                        <FieldItem setHoveredSquares={setHoveredSquares}
                                   hoveredSquares={hoveredSquares}
                                   state={state} key={`${col}${row}`} col={col} row={row}/>) }
                </div>
            })}
        </div>
    )
}