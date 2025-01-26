import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import Tasklist from '../TaskList/Tasklist'
import NewTask from '../TaskList/NewTask'

const Employeedashboard = (props) => {
  
  return (
    <div className='m-10'>

    <Header changeUser={props.changeUser} data={props.data}/>
    <TaskListNumbers data={props.data}/>
    <Tasklist data={props.data}/>
    
    </div>
  )
}

export default Employeedashboard