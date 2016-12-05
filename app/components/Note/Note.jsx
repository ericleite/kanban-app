import React from 'react'

import styles from './Note.scss'

export default ({
  styleName='default',
  children,
  ...props
}) => (
  <div className={styles[styleName]} {...props}>
    {children}
  </div>
)
