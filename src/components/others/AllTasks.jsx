import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className='screen w-full flex flex-col'>
      {/* Header Row */}
      <div className='px-4 m-2 mt-4 flex flex-wrap sm:flex-nowrap items-center justify-between bg-red-500 text-[16px] rounded p-3'>
        <h1 className='w-full sm:w-1/5 text-center font-bold'>Employee Name</h1>
        <h1 className='w-full sm:w-1/5 text-center font-bold'>New Task</h1>
        <h1 className='w-full sm:w-1/5 text-center font-bold'>Active Task</h1>
        <h1 className='w-full sm:w-1/5 text-center font-bold'>Completed</h1>
        <h1 className='w-full sm:w-1/5 text-center font-bold'>Failed</h1>
      </div>

      {/* Data Rows */}
      <div>
        {userData.map((ele, idx) => {
          return (
            <div
              key={idx}
              className='px-4 m-2 mt-4 flex flex-wrap sm:flex-nowrap items-center justify-between bg-blue-300 text-[16px] rounded p-3'
            >
              <h1 className='w-full sm:w-1/5 text-black font-semibold text-center'>{ele.name}</h1>
              <h1 className='w-full sm:w-1/5 text-black font-semibold text-center'>{ele.task_count.new_task}</h1>
              <h1 className='w-full sm:w-1/5 text-black font-semibold text-center'>{ele.task_count.active}</h1>
              <h1 className='w-full sm:w-1/5 text-black font-semibold text-center'>{ele.task_count.completed}</h1>
              <h1 className='w-full sm:w-1/5 text-black font-semibold text-center'>{ele.task_count.failed}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
