import React, { PropTypes } from 'react'

import Button from '../Button/Button'
import Note from '../Note/Note'
import Editable from '../Editable/Editable'

import styles from './Notes.scss'

const Notes = ({
  notes,
  styleName='default',
  onNoteClick = () => {},
  onEdit = () => {},
  onDelete = () => {}
}) => {
  const noResults = notes.length === 0

  return (
    <div className={styles[styleName]}>
      {!noResults ? notes.map(({ id, editing, task }) =>
        <Note
          key={id}
          onClick={onNoteClick.bind(null, id)}
        >
          <Editable
            editing={editing}
            value={task}
            onEdit={onEdit.bind(null, id)}
          />
          <Button
            text="x"
            styleName="sm"
            onClick={onDelete.bind(null, id)}
          />
        </Note>
      ) : <div className={styles.inactive}>All done!</div>}
    </div>
  )
}

Notes.displayName = 'Notes'

Notes.propTypes = {
  notes: PropTypes.array,
  styleName: PropTypes.string,
  onNoteClick: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
}

export default Notes
