import React, { PropTypes } from 'react'

import styles from './Input.scss'

const Input = ({
  styleName='default',
  ...props
}) => (
  <input className={styles[styleName]} {...props}/>
)

Input.displayName = 'Note'

Input.propTypes = {
  styleName: PropTypes.string,
  children: PropTypes.node
}

export default Input
