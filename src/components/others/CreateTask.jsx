import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [task_title, settask_title] = useState("");
  const [task_description, settask_description] = useState("");
  const [task_date, settask_date] = useState("");
  const [newuser, setnewuser] = useState("");
  const [category, setcategory] = useState("");

  const formhandler = (e) => {
    e.preventDefault();

    const newTask = {
      task_title,
      task_description,
      task_date,
      category,
      active: false,
      new_task: true,
      completed: false,
      failed: false,
    };

    const updatedData = userData.map((employee) => {
      if (employee.name === newuser) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          task_count: {
            ...employee.task_count,
            new_task: employee.task_count.new_task + 1,
          },
        };
      }
      return employee;
    });

    setUserData(updatedData);

    // Persist updated user data to localStorage
    localStorage.setItem("Employees", JSON.stringify(updatedData));

    setcategory("");
    settask_date("");
    settask_description("");
    settask_title("");
    setnewuser("");

    console.log(updatedData); // Debugging purposes
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          formhandler(e);
        }}
        className="flex flex-col lg:flex-row justify-between"
      >
        <div className="mt-5 w-full lg:w-1/2">
          <div className="m-4">
            <h1 className="font-semibold">Task Title</h1>
            <input
              value={task_title}
              type="text"
              onChange={(e) => {
                settask_title(e.target.value);
              }}
              placeholder="Enter Task"
              className="px-4 py-1 rounded-md text-[15px] mt-2 bg-transparent border-2 border-green-300 w-full placeholder:text-slate-300"
            ></input>
          </div>
          <div className="m-4">
            <h1 className="font-semibold">Task Date</h1>
            <input
              value={task_date}
              type="date"
              onChange={(e) => {
                settask_date(e.target.value);
              }}
              className="px-4 py-1 rounded-md text-[15px] mt-2 bg-transparent border-2 border-green-300 w-full placeholder:text-slate-300"
            ></input>
          </div>
          <div className="m-4">
            <h1 className="font-semibold">Employee Name</h1>
            <input
              value={newuser}
              type="text"
              onChange={(e) => {
                setnewuser(e.target.value);
              }}
              placeholder="Employee Name"
              className="px-4 py-1 rounded-md text-[15px] mt-2 bg-transparent border-2 border-green-300 w-full placeholder:text-slate-300"
            ></input>
          </div>
          <div className="m-4">
            <h1 className="font-semibold">Category</h1>
            <input
              value={category}
              type="text"
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              placeholder="research, development, design, etc."
              className="px-4 py-1 rounded-md text-[15px] mt-2 bg-transparent border-2 border-green-300 w-full placeholder:text-slate-300"
            ></input>
          </div>
        </div>

        <div className="mt-4 w-full lg:w-2/5 flex flex-col items-start">
          <h1 className="font-semibold">Description</h1>
          <textarea
            value={task_description}
            onChange={(e) => {
              settask_description(e.target.value);
            }}
            rows="10"
            cols="50"
            className="mt-5 h-64 w-full px-4 py-1 rounded-lg text-[15px] bg-transparent border-2 border-green-300 placeholder:text-slate-300"
          ></textarea>
          <button className="h-8 mt-4 bg-green-800 w-full rounded-md text-white text-[20px] font-semibold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
