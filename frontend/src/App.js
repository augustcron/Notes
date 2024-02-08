import "./App.css";
import AddNote from "./components/AddNote.jsx";
import ListNotes from "./components/ListNotes.jsx";

import React from 'react';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddNote />
        <ListNotes />
      </header>
    </div>
  );
}