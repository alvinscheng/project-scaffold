export default function reducer(state = { language: 'English', saying: 'Hello' }, action) {
  switch (action.type) {
    case 'CHANGE_LANGUAGE': return action.payload.language
    default: return state
  }
}
