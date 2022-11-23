const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
          <label>New Task</label>
          <input type="text" placeholder="New Task..." />
      </div>
      <div className="form-control">
          <label>Day & Time</label>
          <input type="text" placeholder="New Task..." />
      </div>
      <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input type="checkbox" />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask