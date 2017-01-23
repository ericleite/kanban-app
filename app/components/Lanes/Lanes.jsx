import React, { PropTypes } from 'react'

// Components
import Lane from '../Lane/Lane'

// CSS
import styles from './Lanes.scss'

const Lanes = ({
  lanes,
  onAddLane = () => {},
  styleName='default'
}) => (
  <div className={styles[styleName]}>
    {
      lanes.map(lane => <Lane key={lane.id} lane={lane}/>)
    }
    <Lane onAddLane={onAddLane}/>
  </div>
)

Lanes.displayName = 'Lanes'

Lanes.propTypes = {
  lanes: PropTypes.array,
  onAddLane: PropTypes.func,
  styleName: PropTypes.string
}

export default Lanes
