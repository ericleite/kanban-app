import React from 'react'
import ReactDOM from 'react-dom'
import Provider from './components/Provider'
import App from './components/App/App'

/* eslint-disable */
import styles from './styles/main.scss'
/* eslint-enable */

// Set webpack publicPath dynamically.
__webpack_public_path__ = process.env.NODE_ENV === 'production' ? 'kanban-app' : ''

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('index')
)
