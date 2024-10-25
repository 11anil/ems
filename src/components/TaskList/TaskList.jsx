import React from 'react'

const TaskList = () => {
  return (
    <div id='taklist' className='flex items-center justify-start overflow-x-auto gap-5 flex-nowrap h-[55%] w-full py-5 mt-10'>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
          
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
            <h4 className='text-sm'>24 oct 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold '>Make a Youtube Video </h2>
          <p className='text-sm mt-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate vitae dolore, rem porro tenetur id.
          </p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-500 rounded-xl'>
          
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
            <h4 className='text-sm'>25 oct 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold '>Create an API</h2>
          <p className='text-sm mt-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate vitae dolore, rem porro tenetur id.
          </p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
          
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
            <h4 className='text-sm'>24 oct 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold '>Review The Code </h2>
          <p className='text-sm mt-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate vitae dolore, rem porro tenetur id.
          </p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-purple-500 rounded-xl'>
          
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
            <h4 className='text-sm'>25 oct 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold '>Meeting with a client </h2>
          <p className='text-sm mt-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate vitae dolore, rem porro tenetur id.
          </p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
          
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
            <h4 className='text-sm'>24 oct 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold '>Make a Youtube Video </h2>
          <p className='text-sm mt-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate vitae dolore, rem porro tenetur id.
          </p>
      </div>
    
    </div>

  )
}

export default TaskList
