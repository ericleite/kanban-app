import React from 'react';

import Button from './Button/Button';
import Note from './Note';
import Editable from './Editable';

export default ({
  notes,
  onNoteClick = () => {},
  onEdit = () => {},
  onDelete = () => {}
}) => (
  <ul>
    {notes.map(({id, editing, task}) =>
      <li key={id}>
        <Note onClick={onNoteClick.bind(null, id)}>
          <Editable
            editing={editing}
            value={task}
            onEdit={onEdit.bind(null, id)} />
          <Button text="x" styleName="sm" onClick={onDelete.bind(null, id)} />
        </Note>
      </li>
    )}
  </ul>
);
