import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import todoReducer from './reducers'

export default function configureStore() {
  return createStore(
    todoReducer,
    applyMiddleware(thunk)
  )
}