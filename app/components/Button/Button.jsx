import React from 'react'

import styles from './Button.scss'

export default ({styleName='default', text, ...props}) => {
  return (
    <button
      className={styles[styleName]}
      {...props}
    >
      {text}
    </button>
  )
}
