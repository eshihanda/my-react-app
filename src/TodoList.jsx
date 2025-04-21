import React, {useState} from 'react'

const TodoList = () => {
    const [tasks, setTask] = useState(['Read a Bible', 'Take a shower', 'Workout']);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () => {
        if(newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }
    const deleteTask = (index) => {
        const updatedTask = tasks.filter((_, i) => i!== index);
        setTask(updatedTask);
    }
    const moveTaskUp = (index) => {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    const moveTaskDown = (index) => {

    }
  return (
    <div className='todo-list'>
        <h1>To-do-List </h1>
        <div>
            <input type="text" 
            placeholder='Enter a task'
            value={newTask}
            onChange={handleInputChange}
             />
             <button className='add-button' onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='del-btn' onClick={() => deleteTask(index)}>Delete</button>
                <button className='move-btn' onClick={() => moveTaskUp(index)}>Up </button>
                <button className='move-btn-down' onClick={() => moveTaskDown(index)}>Down</button>
            </li>
            )}
        </ol>
    </div>
  )
}

export default TodoList
