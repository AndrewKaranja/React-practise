import React from 'react'
import {useField} from 'formik'
import '../styles/TextField.css';
import { StarHalfTwoTone } from '@material-ui/icons';


function TextField({label,...props}) {
    const[field,meta]=useField(props);
    return (
        <div style={{marginBottom:10}}>
            <label htmlFor={field.name} className="form__label" style={{textAlign:'start',margin:'0',fontSize:'12px'}}>{label}</label>
            <input className="form__input" autoComplete="off"></input>
        </div>
    )
}



export default TextField

