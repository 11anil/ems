import React from 'react'

const TasklistNum = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='w-[45%] py-6 px-9 bg-red-400 rounded-xl'>
         <h2 className='text-3xl font-semibold'>0</h2>
         <h3 className='text-xl font-medium'>1 New Task</h3>
      </div>

      <div className='w-[45%] py-6 px-9 bg-blue-600 rounded-xl'>
         <h2 className='text-3xl font-semibold'>0</h2>
         <h3 className='text-xl font-medium'>3 completed Task</h3>
      </div>

      <div className='w-[45%] py-6 px-9 bg-purple-600 rounded-xl'>
         <h2 className='text-3xl font-semibold'>0</h2>
         <h3 className='text-xl font-medium'>0 accepted Task</h3>
      </div>

      <div className='w-[45%] py-6 px-9 bg-yellow-400 rounded-xl'>
         <h2 className='text-3xl font-semibold'>0</h2>
         <h3 className='text-xl font-medium'>0 failed Task</h3>
      </div>
    </div>

    
    
  )
}

export default TasklistNum
