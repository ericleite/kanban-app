import React, { PropTypes } from 'react'

import styles from './Button.scss'

const Button = ({
  styleNames=[ 'default' ],
  text,
  ...props
}) => {
  return (
    <button
      className={ styleNames.reduce((names, name) => names.concat(styles[name]), []).join(' ') }
      {...props}
    >
      {text}
    </button>
  )
}

Button.displayName = 'Button'

Button.propTypes = {
  styleNames: PropTypes.array,
  text: PropTypes.string
}

export default Button
