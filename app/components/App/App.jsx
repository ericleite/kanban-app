import React from 'react'
import uuid from 'uuid'
import connect from '../../libs/connect'

import NoteActions from '../../actions/NoteActions'

import Notes from '../Notes/Notes'
import Button from '../Button/Button'

/* eslint-disable */
import style from './App.scss'
/* eslint-enable */

class App extends React.Component {
  render() {
    const { notes } = this.props

    return (
      <div className="App">
        <Button
          text="+"
          styleName="sm"
          onClick={this.addNote}
        />
        <Notes
          notes={notes}
          onNoteClick={this.activateNodeEdit}
          onEdit={this.editNote}
          onDelete={this.handleDeleteNote}
        />
      </div>
    )
  }

  addNote = () => {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New Task'
    })
  }

  activateNodeEdit = (id) => {
    this.props.NoteActions.update({
      id,
      editing: true
    })
  }

  deleteNote(id) {
    this.props.NoteActions.delete(id)
  }

  editNote = (id, task) => {
    this.props.NoteActions.update({
      id,
      task,
      editing: false
    })

    if (task.length === 0) {
      this.deleteNote(id)
    }
  }

  handleDeleteNote = (id, e) => {
    e.stopPropagation()

    this.deleteNote(id)
  }
}

export default connect(({ notes }) => ({
  notes
}), {
  NoteActions
})(App)
