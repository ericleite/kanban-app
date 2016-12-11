import React, { PropTypes } from 'react'
import AltContainer from 'alt-container'
import alt from '../../libs/alt'
import setup from './setup'

setup(alt)

const Provider = ({ children }) => (
  <AltContainer flux={alt}>
    {children}
  </AltContainer>
)

Provider.displayName = 'Provider-prod'

Provider.propTypes = {
  children: PropTypes.node
}

export default Provider
