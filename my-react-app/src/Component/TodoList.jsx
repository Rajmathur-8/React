import React, { useState } from 'react'

export const TodoList = () => {
    const[tasks,setTasks] = useState([])
    const[newTasks,setNewTasks] = useState([])

    const handleInputChange=(event)=>{
        setNewTasks(event.target.value)
    }
    const addTask=()=>{
        if(newTasks.trim() !== ""){
        setTasks(t=>[...t,newTasks])
        setNewTasks("")
        }
    }
    const deleteTask=(index)=>{
        const updatedTask = tasks.filter((_,ind)=> ind!== index)
        setTasks(updatedTask)
    }
    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };
    
    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };
    

  return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input type="text"  placeholder='Enter a task...' value={newTasks} onChange={handleInputChange}/>
            <button className='add-btn' onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-btn' onClick={()=>deleteTask(index)}>Delete</button>
                    <button className='up-btn' onClick={()=>moveTaskUp(index)}>🔼</button>
                    <button className='down-btn' onClick={()=>moveTaskDown(index)}>🔽</button>
                </li>
            )}
        </ol>
    </div>
  )
}
