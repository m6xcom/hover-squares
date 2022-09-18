import React, {useState, useEffect} from 'react'
import {fetchModes} from "../services/modesApiService";
import '../assets/scss/components/Select.scss'

export function Select({changeMode, selectRef}){
    const [modes , setModes] = useState([]);
    const getAndSetModes = async()=>{
        try {
            const data = await fetchModes();
            setModes(data);
        }catch (e){
            console.log(e)
        }
    }

    const selectChange = (e)=>{
        const selectEl = selectRef.current;
        if (selectEl.value && selectEl.classList.contains("select--error")){
            selectEl.classList.remove('select--error');
        }
        changeMode(e.currentTarget.value);
    }
    useEffect(()=>{
        getAndSetModes();
    }, []);

    return (
        <select ref={selectRef} defaultValue="" onChange={selectChange} className="select" name="mode" id="mode">
            <option className="select__option select__option--hidden" value="" disabled>Pick mode</option>
            { modes.map((el, index)=><option value={el.field} className="select__option" key={index}>{el.name}</option>) }
        </select>
    )
}