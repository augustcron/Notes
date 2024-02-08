import Note from "./Note";
import { API_URL } from "../index.js";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListNotes() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data);
    } catch (error) {
      // Обработка ошибок
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [notes]); // Вызывается только после первой отрисовки


  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </>
  );
}