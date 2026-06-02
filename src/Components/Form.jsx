import { useState } from "react";

export default function Form(props) {
  const [input, setInput] = useState("");

  function handleInputItem(e) {
    setInput(e.target.value);
  }

  function AddItem() {
    props.setList((prev) => [...prev, input]);
    setInput("");
  }
  return (
    <div className="form">
      <input type="text" onChange={handleInputItem} value={input} />
      <button onClick={AddItem}>
        <span>Add</span>
      </button>
    </div>
  );
}
