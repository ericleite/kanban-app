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
  onEditNote = () => {},
  onClickNote = () => {},
  onEmptyDoubleClick = () => {}
}) => {
  const noResults = notes.length === 0

  return (
    <div className={styles[[ styleName, accentColor ].join('-')]}>
      {!noResults ? notes.map(({ id, editing, task }) =>
        <Note
          key={id}
          onClick={onClickNote.bind(null, id)}
        >
          <Editable
            editing={editing}
            value={task}
            onEdit={onEditNote.bind(null, id)}
            onAdd={onAddNote}
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
  onEditNote: PropTypes.func,
  onEmptyDoubleClick: PropTypes.func,
  onClickNote: PropTypes.func,
  styleName: PropTypes.string
}

export default Notes
