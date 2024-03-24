import React, { useState } from "react";
const  Message =()=> {
  const [message, setMessage] = useState('');
  const [list, setList] = React.useState([]);
  function handleChange(e) {
    setMessage(e.target.value);
  }
  function handleAdd() {
    const newlist= list.concat({ message });

    setList(newlist);
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={message}
          placeholder="Enter a task"
          onChange={handleChange}
        />
        <button type="button" onClick={handleAdd} value="update">
          Add
        </button>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.message}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Message;
