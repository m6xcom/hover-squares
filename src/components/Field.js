import React , {useState, useEffect} from 'react'
import {FieldItem} from "./FieldItem";
import '../assets/scss/components/Field.scss'

export function Field(props){
    const [squareArr, setSquareArr] = useState([]);

    useEffect(()=>{
        const tempArr = [];
        for(let i = 0; i < props.mode ; i++){
            tempArr.push(i + 1);
        }
        setSquareArr(tempArr);
    }, [props.mode]);

    return (
        <div className={`field ${props.mode === 5 ? 'field--small' : props.mode === 15 ? 'field--medium' : 'field--big'}`}>
            {squareArr.map((row)=>{
                return <div key={row} className='field__row'>
                    { squareArr.map((col)=>
                        <FieldItem setHoveredSquares={props.setHoveredSquares}
                                   hoveredSquares={props.hoveredSquares}
                                   state={props.state} key={`${col}${row}`} col={col} row={row}/>) }
                </div>
            })}
        </div>
    )
}