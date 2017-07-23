import LaneActions from '../actions/LaneActions'

export default class LaneStore {
  constructor() {
    this.bindActions(LaneActions)

    this.lanes = []
  }

  create(lane) {
    lane.notes = lane.notes || []

    this.setState({
      lanes: this.lanes.concat(lane)
    })
  }

  delete(id) {
    this.setState({
      lanes: this.lanes.filter(lane => lane.id !== id)
    })
  }

  update(updatedLane) {
    this.setState({
      lanes: this.lanes.map(lane => {
        if (lane.id === updatedLane.id) {
          return Object.assign({}, lane, updatedLane)
        }

        return lane
      })
    })
  }

  attachToLane(payload) {
    const noteIdToAttach = payload.noteId
    const laneIdToAttachTo = payload.laneId

    // TODO: check for non-existant lane id


    this.setState({
      lanes: this.lanes.map(lane => {
        // remove the note from the current lane it's in
        if (lane.notes.includes(noteIdToAttach)) {
          lane.notes = lane.notes.filter(noteId => noteId !== noteIdToAttach)
        }

        // add the note to the desired lane
        if (lane.id === laneIdToAttachTo) {
          lane.notes = lane.notes.concat([ noteIdToAttach ])
        }

        return lane
      })
    })
  }

  detachFromLane(payload) {
    const noteIdToDetach = payload.noteId
    const laneIdToDetachFrom = payload.laneId

    // TODO: check if nothing was removed

    this.setState({
      lanes: this.lanes.map(lane => {
        if (lane.id === laneIdToDetachFrom) {
          lane.notes = lane.notes.filter(noteId => noteId !== noteIdToDetach)
        }

        return lane
      })
    })
  }
}
