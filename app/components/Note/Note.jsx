import React, { PropTypes } from 'react'

import styles from './Note.scss'

const Note = ({
  styleName='default',
  children,
  ...props
}) => (
  <div className={styles[styleName]} {...props}>
    {children}
  </div>
)

Note.displayName = 'Note'

Note.propTypes = {
  styleName: PropTypes.string,
  children: PropTypes.node
}

export default Note
