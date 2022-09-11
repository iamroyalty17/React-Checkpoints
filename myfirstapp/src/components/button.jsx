import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div className='button-wrapper'>
        <button type={props.type} onClick={props.clickHandler}>{props.name}</button>
    </div>
  )
}

Button.propTypes = {
    clickHandler: PropTypes.func,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Button