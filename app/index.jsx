import React from 'react'
import ReactDOM from 'react-dom'
import Provider from './components/Provider'
import App from './components/App/App'

/* eslint-disable */
import styles from './styles/main.scss'
/* eslint-enable */

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('index')
)
