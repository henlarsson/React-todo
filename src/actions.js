import {
  ADD_ITEM,
  ADD_TODO,
  DELETE_ITEM,
  DELETE_TODO,
  UPDATE_HEADER,
  UPDATE_ITEM
} from './constants'

export const addItem = (todo) => ({
  type: ADD_ITEM,
  payload: todo
})
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})
export const deleteItem = (todo) => ({
  type: DELETE_ITEM,
  payload: todo
})
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
})
export const updateHeader = (todo) => ({
  type: UPDATE_HEADER,
  payload: todo
})
export const updateItem = (todo) => ({
  type: UPDATE_ITEM,
  payload: todo
})