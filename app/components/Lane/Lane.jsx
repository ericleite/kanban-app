import React, { PropTypes } from 'react'
import uuid from 'uuid'
import connect from '../../libs/connect'
import { selectNotesByIds } from '../../libs/utils'

// Actions
import NoteActions from '../../actions/NoteActions'
import LaneActions from '../../actions/LaneActions'

// Components
import Button from '../Button/Button'
import Editable from '../Editable/Editable'
import Notes from '../Notes/Notes'

// CSS
import styles from './Lane.scss'

const Lane = ({
  lane,
  LaneActions,
  NoteActions,
  notes,
  onAddLane = () => {},
  styleName='default',
  ...props
}) => {
  const deleteNote = noteId => {
    LaneActions.detachFromLane({
      laneId: lane.id,
      noteId
    })
    NoteActions.delete(noteId)
  }

  const onAddNote = () => {
    const noteId = uuid.v4()

    NoteActions.create({
      id: noteId,
      task: '',
      editing: true
    })
    LaneActions.attachToLane({
      laneId: lane.id,
      noteId
    })
  }

  const onClickLaneHeader = id => {
    LaneActions.update({
      id,
      editing: true
    })
  }

  const onClickNote = id => {
    NoteActions.update({
      id,
      editing: true
    })
  }

  const onDeleteNote = (id, e) => {
    e.stopPropagation()

    deleteNote(id)
  }

  const onDeleteLane = (id, e) => {
    e.stopPropagation()

    LaneActions.delete(id)
  }

  const onEditLane = (id, title) => {
    LaneActions.update({
      id,
      title,
      editing: false
    })
  }

  const onEditNote = (id, task) => {
    NoteActions.update({
      id,
      task,
      editing: false
    })

    if (task.length === 0) {
      deleteNote(id)
    }
  }

  return (
    <div className={styles[styleName]} {...props}>
      {lane !== undefined ?
        <div>
          <div className={styles['header']}>
            <h4 onClick={onClickLaneHeader.bind(null, lane.id)}>
              <Editable
                editing={lane.editing}
                editingStyleName="seamless--header"
                value={lane.title || 'Enter a title...'}
                onEdit={onEditLane.bind(null, lane.id)}
                onAdd={onAddLane}
              />
              <Button
                text="x"
                styleNames={[ 'action--deleteLane' ]}
                onClick={onDeleteLane.bind(null, lane.id)}
              />
            </h4>
          </div>
          <Notes
            notes={selectNotesByIds(notes, lane.notes)}
            accentColor={lane.color}
            onAddNote={onAddNote}
            onClickNote={onClickNote}
            onDelete={onDeleteNote}
            onEditNote={onEditNote}
            onEmptyDoubleClick={onAddNote}
          />
          <Button
            text="Add note..."
            styleNames={[ 'faded' ]}
            onClick={onAddNote}
          />
        </div>
      :
        <Button
          text="Add list..."
          styleNames={[ 'faded' ]}
          onClick={onAddLane}
        />
      }
    </div>
  )
}

Lane.displayName = 'Lane'

Lane.propTypes = {
  lane: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }),
  LaneActions: PropTypes.object,
  NoteActions: PropTypes.object,
  notes: PropTypes.array,
  onAddLane: PropTypes.func,
  styleName: PropTypes.string
}

export default connect(
  ({ notes }) => ({ notes }),
  {
    NoteActions,
    LaneActions
  }
)(Lane)
