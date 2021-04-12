import React from 'react'
import {ErrorMessage,useField} from 'formik'
import '../styles/SignupPage.css';
import '../styles/TextField.css';




function TextField({label,...props}) {
    const[field,meta]=useField(props);
    return (
        <div className="form__div">
           
            <input className={`form__input ${meta.touched && meta.error && 'is-invalid'}` } {...field} {...props}  autoComplete="off"></input>
            <label htmlFor={field.name} className="form__label" >{label}</label>
            {/* {meta.touched && meta.error && 'is-invalid' ?(
              <div>{meta.error}</div>
            ):null} */}
            <ErrorMessage component="div" className="error" name={field.name}/>
            
        </div>
    )
}



export default TextField

