import React, { useState } from "react";

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }
  function handleClick(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          className="formtitle"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default AddNote;
