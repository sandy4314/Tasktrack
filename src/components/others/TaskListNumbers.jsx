import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <div className='flex flex-wrap mt-16 gap-5 justify-between screen'>
      {/* New Task Card */}
      <div className='px-4 flex h-40 w-full sm:w-[45%] flex-col bg-blue-400 items-start py-10 rounded-2xl'>
        <h1 className='font-bold text-2xl'>{data.task_count.new_task}</h1>
        <h1 className='font-semibold text-3xl'>New Task</h1>
      </div>
      
      {/* Completed Task Card */}
      <div className='px-4 flex h-40 w-full sm:w-[45%] flex-col bg-green-400 items-start py-10 rounded-2xl'>
        <h1 className='font-bold text-2xl'>{data.task_count.completed}</h1>
        <h1 className='font-semibold text-3xl'>Completed</h1>
      </div>
      
      {/* Active Task Card */}
      <div className='px-4 flex h-40 w-full sm:w-[45%] flex-col bg-orange-400 items-start py-10 rounded-2xl'>
        <h1 className='font-bold text-2xl'>{data.task_count.active}</h1>
        <h1 className='font-semibold text-3xl'>Active</h1>
      </div>
      
      {/* Failed Task Card */}
      <div className='px-4 flex h-40 w-full sm:w-[45%] flex-col bg-red-400 items-start py-10 rounded-2xl'>
        <h1 className='font-bold text-2xl'>{data.task_count.failed}</h1>
        <h1 className='font-semibold text-3xl'>Failed</h1>
      </div>
    </div>
  );
};

export default TaskListNumbers;
