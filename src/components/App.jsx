import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";

function App() {
  const [notes, updateNotes] = useState([]);
  function addNote(note) {
    updateNotes((prevValue) => [...prevValue, note]);
  }

  function deleteNote(param) {
    // TO BE DONE
  }
  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((note) => (
        <Note key={note.title} title={note.title} content={note.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
