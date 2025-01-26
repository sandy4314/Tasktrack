import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

const Admindashboard = (props) => {
  return (
    <div className='m-10'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <CreateTask/>
        <AllTasks/>
    </div>
  )
}

export default Admindashboard