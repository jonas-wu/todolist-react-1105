import * as actionTypes from './actionTypes'

const defaultState = {
  inputValue: 'hello',
  list: []
}

export default (state = defaultState, action) => {
  console.log(state, action)
  if (action.type === actionTypes.INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = [...action.data]
    console.log(newState.list)
    return newState
  }

  if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === actionTypes.ADD_LIST_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = [...state.list, action.value]
    newState.inputValue = ''
    return newState
  }

  if (action.type === actionTypes.DELETE_LIST_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }

  return state
}