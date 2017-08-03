import React, { Component } from 'react'
import store from '../store'

const greetings = [
  { language: 'English', saying: 'Hello' },
  { language: 'Spanish', saying: 'Hola' },
  { language: 'French', saying: 'Bonjour' },
  { language: 'Italian', saying: 'Ciao' },
  { language: 'German', saying: 'Hallo' },
  { language: 'Hindi', saying: 'Namaste' },
  { language: 'Japanese', saying: 'Konnichiwa' },
  { language: 'Farsi', saying: 'Salaam' },
  { language: 'Chinese', saying: 'Ni Hao' },
  { language: 'Arabic', saying: 'Marhaba' }
]

function randomLang() {
  return greetings[Math.floor((Math.random() * greetings.length))]
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage() {
    store.dispatch({
      type: 'CHANGE_LANGUAGE',
      payload: { language: randomLang() }
    })
  }

  render() {
    return (
      <a href={ '#' + this.props.hello.language }>
        <h1 onClick={ this.changeLanguage }>{ this.props.hello.saying } World!</h1>
      </a>
    )
  }
}
