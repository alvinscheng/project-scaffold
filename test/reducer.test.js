import reducer from '../client/reducer'
const { describe, it } = require('mocha')
const { expect } = require('chai')

describe('reducer', () => {

  describe('CHANGE_LANGUAGE', () => {
    it('changes the language', () => {
      const oldState = { language: 'English', saying: 'Hello' }
      const action = {
        type: 'CHANGE_LANGUAGE',
        payload: {
          language: { language: 'Spanish', saying: 'Hola' }
        }
      }
      const newState = reducer(oldState, action)
      expect(newState.saying).to.deep.equal('Hola')
      expect(newState).to.be.an('object')
    })
  })

  describe('DEFAULT', () => {
    it('defaults', () => {
      const oldState = { language: 'English', saying: 'Hello' }
      const action = { type: 'DEFAULT' }
      const newState = reducer(oldState, action)
      expect(newState).to.deep.equal(oldState)
    })
  })
})
