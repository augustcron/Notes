import Note from "./Note";
import { API_URL } from "../index.js";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
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
  }, []);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleNoteSubmission = async () => {
    try {
      const response = await axios.post(API_URL, { name, description });
      fetchNotes()
      setOpen(!open)
    } catch (error) {
      // Handle any errors that occur during the submission
    }
  };

  return (
    <>
      <div>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Add One
        </Button>

        <Collapse in={open}>
          <div id="example-collapse-text">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </Form.Group>
              <Button onClick={handleNoteSubmission}>Submit Note</Button>
            </Form>
          </div>
        </Collapse>
      </div>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </>
  );
}
