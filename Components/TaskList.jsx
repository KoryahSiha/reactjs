import React from 'react'
import './TaskList.css'

const TaskItem = (task, index) => {
    return <li key={index} className='task__item'>{task}</li>
}


export default function TaskList(props) {
    const { tasksList } = props;
  return (
    <ul className='task__list'>
        {tasksList.map((task, index) => {
            return TaskItem(task, index);
       })}
    </ul>
  )
}