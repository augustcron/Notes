import "./App.css";
import ListNotes from "./components/ListNotes.jsx";

import React from 'react';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListNotes />
      </header>
    </div>
  );
}