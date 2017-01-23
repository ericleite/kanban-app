import React, { PropTypes } from 'react'

import Button from '../Button/Button'
import Note from '../Note/Note'
import Editable from '../Editable/Editable'

import styles from './Notes.scss'

const Notes = ({
  notes,
  accentColor='viking',
  styleName='default',
  onAddNote = () => {},
  onDelete = () => {},
  onEdit = () => {},
  onNoteClick = () => {},
  onEmptyDoubleClick = () => {}
}) => {
  const noResults = notes.length === 0

  return (
    <div className={styles[[ styleName, accentColor ].join('-')]}>
      {!noResults ? notes.map(({ id, editing, task }) =>
        <Note
          key={id}
          onClick={onNoteClick.bind(null, id)}
        >
          <Editable
            editing={editing}
            value={task}
            onEdit={onEdit.bind(null, id)}
            onAddNote={onAddNote}
          />
          <Button
            text="x"
            styleNames={[ 'outlined-sm' ]}
            onClick={onDelete.bind(null, id)}
          />
        </Note>
      ) : <div className={styles.inactive} onDoubleClick={onEmptyDoubleClick}>All done!</div>}
    </div>
  )
}

Notes.displayName = 'Notes'

Notes.propTypes = {
  accentColor: PropTypes.string,
  notes: PropTypes.array,
  onAddNote: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onEmptyDoubleClick: PropTypes.func,
  onNoteClick: PropTypes.func,
  styleName: PropTypes.string
}

export default Notes
