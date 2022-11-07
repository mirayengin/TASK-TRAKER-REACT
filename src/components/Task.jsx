import { useState } from "react";
// { ulStatus ? "inputDiv" : "inputDiv line-through"}
// style= {{textDecoration:"line-through"}}
const Task = (item, index) => {

  const [ulStatus, setUlStatus] = useState(false)

  const { taskInput, dayInput } = item;

  const handleClick = (e) => {
    console.log(e.target.closest(".tasksDiv"));
    e.target.closest(".tasksDiv").remove();
  }

  const handleUl = () => {
    setUlStatus(!ulStatus)
  }

console.log(ulStatus)
console.log(item)



  return (
    <div key={index} className="d-flex tasksDiv">
      <ul onClick={handleUl} className={ !ulStatus ? "inputDiv" : "inputDiv line"}>
        <li >{ taskInput}</li>
        <li >{ dayInput}</li>
      </ul>
      <div className="iconDiv">
      <i onClick={handleClick} className="far fa-trash-alt"></i>
      </div>
    </div>
  )
}

export default Task