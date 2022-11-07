import { useState } from "react";

const AddTask = ({ status, setTasks, tasks }) => {
  console.log(status);

  const [taskInput, setTaskInput] = useState("");
  const [dayInput, setDayInput] = useState("");

  const handleAdd = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);

    e.target.id === "exampleInputEmail1"
      ? setTaskInput(e.target.value)
      : setDayInput(e.target.value);
  };
  const intersection = tasks.filter((item) => item.taskInput === taskInput);
  console.log(intersection);
  console.log(tasks);

  const handleSave = (e) => {
    e.preventDefault();

    // if (intersection.lenght === 0) {
    //   setTasks([...tasks, { taskInput, dayInput }]);

    //   }
    //  e.target.id === "save" && setTasks([...tasks.filter((item) => (item.taskInput !== taskInput)), { taskInput, dayInput }]);
    //  setTasks([...tasks.filter((item) => (item.taskInput !== "")), { taskInput, dayInput }]);
    //  setTasks([...tasks.some((item) => (item.dayInput !== "")), { taskInput, dayInput }]);
    // setTasks([
    //   ...tasks,
    //   { taskInput, dayInput },
    // ]);
    const isVarmi = tasks.some((item) => item.taskInput === taskInput);
    !isVarmi && setTasks([...tasks, { taskInput, dayInput }]);

    // setTasks([
    //   ...tasks.filter((item) => item.taskInput !== taskInput),
    //   { taskInput, dayInput },
    // ]);

    setTaskInput("");
    setDayInput("");
  };

  console.log(taskInput);
  console.log(dayInput);
  console.log(tasks);

  return (
    status && (
      <form onSubmit={handleSave}>
        <div className="mb-3 text-start">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fs-5 fw-bold"
          >
            TASK
          </label>
          <input
            required
            value={taskInput}
            onChange={handleAdd}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 text-start">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fs-5 fw-bold "
          >
            Day&Tıme
          </label>
          <input
            required
            value={dayInput}
            onChange={handleAdd}
            type="date"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-lg btn-danger mb-4" id="save">
          Save
        </button>
      </form>
    )
  );
};

export default AddTask;
