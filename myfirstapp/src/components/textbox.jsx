import React from 'react'
import PropTypes from 'prop-types';

const TextBox = (props) => {
    return (
        <div className='input-wrapper' style={{padding: '10px'}}>
            <div style={{width: '30%', display: "inline-block"}}><label>{props.label}</label></div>
            <div style={{width: '70%', display: "inline-block"}}><input type={props.type} onChange={(e)=>props.onChangeHandler(e.target.value)} name={props.name} value={props.value} /></div>
        </div>
    )
}

TextBox.propTypes = {
    label: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired
}

export default TextBox