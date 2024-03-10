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

  function deleteNote(noteID) {
    updateNotes((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return noteID !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            onDelete={deleteNote}
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
