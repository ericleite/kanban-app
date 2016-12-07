import React, { PropTypes } from 'react'

import styles from './Button.scss'

const Button = ({
  styleName='default',
  text,
  ...props
}) => {
  return (
    <button
      className={styles[styleName]}
      {...props}
    >
      {text}
    </button>
  )
}

Button.displayName = 'Button'

Button.propTypes = {
  styleName: PropTypes.string,
  text: PropTypes.string
}

export default Button
