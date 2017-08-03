import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store from './store'

const $app = document.querySelector('#app')

function render() {
  const hello = store.getState()
  ReactDOM.render(
    <App hello={ hello } />,
    $app
  )
}

render()

store.subscribe(render)
