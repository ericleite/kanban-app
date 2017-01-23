import React, { PropTypes } from 'react'
import uuid from 'uuid'
import connect from '../../libs/connect'

// Actions
import LaneActions from '../../actions/LaneActions'

// Components
import Lanes from '../Lanes/Lanes'

// CSS
/* eslint-disable */
import styles from './App.scss'
/* eslint-enable */

const App = ({ lanes, LaneActions }) => {
  const onAddLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New Lane',
      color: 'viking'
    })
  }

  return (
    <div className="App">
      <Lanes
        lanes={lanes}
        onAddLane={onAddLane}
      />
    </div>
  )
}

App.propTypes = {
  lanes: PropTypes.array,
  LaneActions: PropTypes.object
}

export default connect(
  ({ lanes }) => ({ lanes }),
  { LaneActions }
)(App)
