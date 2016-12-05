import React from 'react'

import styles from './Input.scss'

export default ({
  styleName='default',
  ...props
}) => (
  <input className={styles[styleName]} {...props}/>
)
