import React from 'react'
import {useField} from 'formik'
import { StarHalfTwoTone } from '@material-ui/icons';


function TextField({label,...props}) {
    const[field,meta]=useField(props);
    return (
        <div style={{marginBottom:20}}>
            <label htmlFor={field.name} style={{textAlign:'start'}}>{label}</label>
            <input className="form-control shadow-none" autoComplete="off"></input>
        </div>
    )
}



export default TextField

