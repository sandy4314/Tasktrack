import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 bg-lime-400 h-full w-[90%] sm:w-[300px] rounded-xl p-5'>
      <div className='m-4 flex flex-row justify-between'>
        <h1 className='font-bold bg-red-500 rounded py-1 px-2'>{data.category}</h1>
        <p className='text-blue-700 font-bold'>{data.task_date}</p>
      </div>
      <h1 className='font-bold text-[20px] text-center pt-8'>{data.task_title}</h1>
      <div className='flex-1 overflow-y-auto my-4'>
        <p className='font-semibold text-center text-[15px]'>{data.task_description}</p>
      </div>
      <button className='bg-green-600 text-white px-4 py-2 rounded w-full'>
        Completed
      </button>
    </div>
  );
};

export default CompleteTask;
