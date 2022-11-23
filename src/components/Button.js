import PropTypes from "prop-types"
import React from 'react'

const Button = ({ color, text, onClick, icon }) => {
  return (
    <button 
        className="btn"
        style={{ backgroundColor: color }}
        onClick={onClick}
    >
        {text} &nbsp; {icon}
    </button>
  )
}

Button.defaultProps = {
    color: "Black",
    text: "Empty"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.element
}

export default Button
