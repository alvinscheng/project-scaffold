import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import store from './store'

const $app = document.querySelector('#app')

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  $app
)
