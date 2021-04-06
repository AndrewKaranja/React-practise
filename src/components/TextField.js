import React from 'react'
import {useField} from 'formik'
import PropTypes from 'prop-types'

function TextField({label,...props}) {
    const[field,meta]=useField(props);
    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input className="form-control shadow-none" autoComplete="off"></input>
        </div>
    )
}

TextField.propTypes = {

}

export default TextField

