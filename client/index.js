import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store from './store'

function render() {
  ReactDOM.render(
    <App />,
    document.querySelector('#app')
  )
}

store.subscribe(render)

render()
