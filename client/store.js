import { createStore } from 'redux'

function reducer(state = { language: 'English', saying: 'Hello' }, action) {
  switch (action.type) {
    case 'CHANGE_LANGUAGE': return action.payload.language
    default: return state
  }
}

const store = createStore(reducer)

export default store
