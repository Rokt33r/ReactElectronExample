import { combineReducers, createStore } from 'redux'
import { routerReducer } from 'react-router-redux'

function config (state = {}, action) {
  return state
}

function targets (state = {}, action) {
  return state
}

let reducer = combineReducers({
  config,
  targets,
  routing: routerReducer
})

let store = createStore(reducer)

export default store
