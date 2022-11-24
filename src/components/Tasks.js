import Task from "./Task"
import PropTypes from "prop-types"

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => 
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      )}
    </>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    day: PropTypes.string,
    reminder: PropTypes.bool
  })),
  onDelete: PropTypes.func,
  onToggle: PropTypes.func
}

export default Tasks
