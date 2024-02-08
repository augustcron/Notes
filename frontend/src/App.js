import "./App.css";
import Note from "./components/Note";
import { API_URL } from "./index.js";
import axios from "axios";
import React, { useState, useEffect } from 'react';

export default function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(API_URL);
        setNotes(response.data);
      } catch (error) {
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </header>
    </div>
  );
}
