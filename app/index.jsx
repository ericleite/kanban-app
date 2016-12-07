import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

/* eslint-disable */
import styles from './styles/main.scss'
/* eslint-enable */

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf')
}

ReactDOM.render(
  <App/>,
  document.getElementById('index')
)
