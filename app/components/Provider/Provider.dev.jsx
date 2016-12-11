import React, { PropTypes } from 'react'
import AltContainer from 'alt-container'
import chromeDebug from 'alt-utils/lib/chromeDebug'
import alt from '../../libs/alt'
import setup from './setup'

setup(alt)
chromeDebug(alt)

React.Perf = require('react-addons-perf')

const Provider = ({ children }) => (
  <AltContainer flux={alt}>
    {children}
  </AltContainer>
)

Provider.displayName = 'Provider-dev'

Provider.propTypes = {
  children: PropTypes.node
}

export default Provider
