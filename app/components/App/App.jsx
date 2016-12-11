import React from 'react'
import uuid from 'uuid'
import connect from '../../libs/connect'

import Notes from '../Notes/Notes'
import Button from '../Button/Button'

/* eslint-disable */
import style from './App.scss'
/* eslint-enable */

class App extends React.Component {
  state = {
    notes: [
      {
        id: uuid.v4(),
        task: 'Build a kanban app'
      },
      {
        id: uuid.v4(),
        task: 'Do laundry'
      }
    ]
  }

  render() {
    const { notes } = this.state

    return (
      <div className="App">
        {this.props.test}
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
    this.setState({
      notes: this.state.notes.concat([
        {
          id: uuid.v4(),
          task: 'Another task'
        }
      ])
    })
  }

  activateNodeEdit = (id) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === id) {
          note.editing = true
        }

        return note
      })
    })
  }

  deleteNote(id) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id)
    })
  }

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === id) {
          note.editing = false
          note.task = task
        }

        return note
      })
    })

    if (task.length === 0) {
      this.deleteNote(id)
      return
    }
  }

  handleDeleteNote = (id, e) => {
    e.stopPropagation()

    this.deleteNote(id)
  }
}

export default connect(() => ({
  test: 'test'
}))(App)
