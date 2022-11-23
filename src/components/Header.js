import PropTypes from "prop-types"
import Button from "./Button" 
import { FaExpandAlt, FaWindowClose } from "react-icons/fa";

const Header = ({ title, toggleAddTask, showAddTask }) => {
  
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button 
          color={showAddTask ? "indianred" : "forestgreen" }
          text={showAddTask ? "Collapse" : "Add Task"}
          icon={!showAddTask ? <FaExpandAlt className="collapseIcons" /> : <FaWindowClose className="expandIcons" />}
          onClick={toggleAddTask} />
    </header>
  )
}

Header.defaultProps =  {
  title: "Task Tracker"
}

Header.propTypes = {
  title: PropTypes.string,
  toggleAddTask: PropTypes.func,
  showAddTask: PropTypes.bool
}

export default Header
