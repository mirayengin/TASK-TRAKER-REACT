import { useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState(false);

  return (
    <div className="w-50">
      {!status ? (
        <button
          onClick={() => setStatus(!status)}
          type="button"
          className="btn btn-lg  bg-success text-white fs-3 mb-4"
        >
          Show Add Task Bar
        </button>
      ) : (
        <button
          onClick={() => setStatus(!status)}
          type="button"
          className="btn btn-lg bg-danger text-white"
        >
        Close Add Task Bar
          </button>
          

      )}
      <AddTask setTasks={setTasks} tasks={tasks} status={status} />


      {tasks.map((item, index) => {
        return <Task key={index} {...item} />;
      })}
    </div>
  );
};

export default Home;
