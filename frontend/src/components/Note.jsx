import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

export default function Note(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.name}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {props.description}
        </div>
      </Collapse>
    </>
  );
}

