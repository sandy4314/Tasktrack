import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const Tasklist = ({ data }) => {
  return (
    <div
      id="tasks"
      className="w-full h-auto md:h-[50%] overflow-x-auto mt-10 flex items-center justify-start flex-nowrap gap-5 px-4"
    >
      {data.tasks.map((ele, idx) => {
        if (ele.active) {
          return <AcceptTask data={ele} key={idx} />;
        }
        if (ele.new_task) {
          return <NewTask data={ele} key={idx} />;
        }
        if (ele.completed) {
          return <CompleteTask data={ele} key={idx} />;
        }
        if (ele.failed) {
          return <FailedTask data={ele} key={idx} />;
        }
        return null;
      })}
    </div>
  );
};

export default Tasklist;
