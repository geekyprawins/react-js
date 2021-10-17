function AddTask() {
  return (<form className="add-form">

        <div className='form-control'>

            <label>Task</label>
            <input type='text' placeholder="Add your task!"/>
        </div>
        <div className='form-control'>

            <label>Day&Time</label>
            <input type='text' placeholder="Add day and time!"/>
        </div>
        <div className='form-control form-control-check'>

            <label>Set Reminder</label>
            <input type='checkbox' />
        </div>
    <button type="submit"  className="btn btn-block">Save Task</button>
  </form> );
}

export default AddTask;
