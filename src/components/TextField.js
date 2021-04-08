import React from 'react'
import {useField} from 'formik'
import '../styles/SignupPage.css';
import { StarHalfTwoTone } from '@material-ui/icons';


function TextField({label,...props}) {
    const[field,meta]=useField(props);
    return (
        <div className="form__div">
            <input className="form__input" autoComplete="off"></input>
            <label htmlFor={field.name} className="form__label" >{label}</label>
            
        </div>
    )
}



export default TextField

