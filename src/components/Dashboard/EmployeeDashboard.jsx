import React from 'react'
import Header from '../HeroSection/Header'
import TasklistNum from '../HeroSection/TasklistNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
     <Header/>
     <TasklistNum/>
     <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
