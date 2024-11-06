import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement}
        className="btn btn-success pill mb-3">
        Add Element
      </button>
      <ul className="list-unstyled">
        {array.map((item, index) => (
          <li key={index} className="border rounded h4 p-2 d-flex justify-content-between align-items-center">
            {item}
            <button onClick={() => deleteElement(index)}
              id="wd-delete-element-click"
              className="btn btn-danger pill">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
