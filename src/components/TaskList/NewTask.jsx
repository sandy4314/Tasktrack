import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 bg-lime-400 h-full w-[90%] max-w-[300px] md:max-w-[350px] rounded-xl p-4 md:p-6 mx-auto">
      <div className="m-4 flex flex-row justify-between items-center">
        <h1 className="font-bold bg-red-500 rounded py-1 px-2 text-xs md:text-sm">{data.category}</h1>
        <p className="text-blue-700 font-bold text-xs md:text-sm">{data.task_date}</p>
      </div>
      <h1 className="font-bold text-lg md:text-xl text-center pt-4 md:pt-8">{data.task_title}</h1>
      <p className="pt-2 md:pt-4 font-semibold text-center text-sm md:text-base mb-4">
        {data.task_description}
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition duration-300">
        Accept Task
      </button>
    </div>
  );
};

export default NewTask;
