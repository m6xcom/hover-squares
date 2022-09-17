import React, {useState, useEffect} from 'react'
import {fetchModes} from "../services/modesApiService";
import '../assets/scss/components/Select.scss'

export function Select(props){
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
        const select = document.getElementsByClassName('select')[0];
        if (select.value && select.classList.contains("select--error")){
            select.classList.remove('select--error');
        }
        props.changeMode(e.currentTarget.value);
    }
    useEffect(()=>{
        getAndSetModes();
    }, []);

    return (
        <select defaultValue="" onChange={selectChange} className="select" name="mode" id="mode">
            <option className="select__option select__option--hidden" value="" disabled>Pick mode</option>
            { modes.map((el, index)=><option value={el.field} className="select__option" key={index}>{el.name}</option>) }
        </select>
    )
}