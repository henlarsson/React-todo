// import { combineReducers } from 'redux'
import {
  ADD_TEXT,
  ADD_TODO,
  DELETE_ITEM,
  DELETE_TODO,
  UPDATE_HEADER,
  UPDATE_ITEM
} from './constants'
import * as storage from './Utility/Storage'

const getInitialValue = () => {
  const todos = storage.getItem("todelido")
  return todos || []
}

const saveTodos = (todos) => {
  storage.setItem("todelido", todos)
}

export const initialState = {
  todos: getInitialValue(),
  checkedIfSavedTodos: false
}

const todoReducer = (state = initialState, action) => {
  let todos
  switch (action.type) {
    case ADD_TEXT:
      action.payload.newItem.id = getId()
      todos = updateTodo(state.todos, action.payload, ((todo, payload) => {
        todo.items = todo.items.concat(payload.newItem)
        return todo
      }))
      saveTodos(todos)
      return { ...state, todos: todos }
    case ADD_TODO:
      action.payload.id = getId()
      todos = state.todos.concat(action.payload)
      saveTodos(todos)
      return { ...state, todos: todos }
    case DELETE_ITEM:
      todos = updateTodo(state.todos, action.payload, ((todo, payload) => {
        const itemIndex = todo.items.findIndex(item => item.id === payload.itemId)
        todo.items.splice(itemIndex, 1)
        return todo
      }))
      saveTodos(todos)
      return { ...state, todos: todos }
    case DELETE_TODO:
      const tempTodos = state.todos.map(todo => todo)
      const itemIndex = tempTodos.findIndex(todo => todo.id === action.payload.id)
      tempTodos.splice(itemIndex, 1)
      saveTodos(tempTodos)
      return { ...state, todos: tempTodos }
    case UPDATE_HEADER:
      todos = updateTodo(state.todos, action.payload, ((todo, payload) => {
        todo.header = payload.header
        return todo
      }))
      saveTodos(todos)
      return { ...state, todos: todos }
    case UPDATE_ITEM:
      todos = updateTodo(state.todos, action.payload, ((todo, payload) => {
        todo.items = payload.items
        return todo
      }))
      saveTodos(todos)
      return { ...state, todos: todos }
    default:
      return state
  }
}

const updateTodo = (todos, payload, updateFunc) => {
  return todos.map(todo => {
    if (todo.id === payload.id) {
      todo = updateFunc(todo, payload)// todo.header = action.payload.header
    }
    return todo
  })
}

const getId = () => {
  var date = new Date();
  return date.getTime();
}

export default todoReducer