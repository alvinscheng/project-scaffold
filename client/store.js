import { createStore } from 'redux'

function reducer(state, action) {
  switch (action.type) {
    case 'DO_SOMETHING': return state
    default: return state
  }
}

const store = createStore(reducer)

export default store
