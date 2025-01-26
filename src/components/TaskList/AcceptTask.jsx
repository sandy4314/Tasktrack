import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 bg-lime-400 h-full w-full sm:w-[300px] rounded-xl p-5'>
      <div className='m-4 flex flex-row justify-between'>
        <h1 className='font-bold bg-red-500 rounded py-1 px-2'>{data.category}</h1>
        <p className='text-blue-700 font-bold'>{data.task_date}</p>
      </div>
      <h1 className='font-bold text-[20px] text-center pt-8'>{data.task_title}</h1>
      <p className='pt-4 font-semibold text-center text-[15px] mb-2'>{data.task_description}</p>
      <button className='bg-green-600 w-full rounded px-1 py-2'>Click if Completed</button>
      <button className='bg-red-600 w-full rounded my-2 px-1 py-2'>Click if Failed</button>
    </div>
  )
}

export default AcceptTask;
