import PropTypes from "prop-types"

const Button = ({ color, text, onClick, icon }) => {
  return (
    <button 
        className="btn"
        style={{ backgroundColor: color }}
        onClick={onClick}
    >
        {text}&nbsp;{icon}
    </button>
  )
}

Button.defaultProps = {
    color: "Black",
    text: "Default Text..."
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onclick: PropTypes.func,
    icon: PropTypes.element
}

export default Button
