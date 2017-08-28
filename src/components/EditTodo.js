import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addText, addTodo } from '../actions'
import { withRouter } from 'react-router-dom'
import { AddItem, RemoveTodo, Todo } from './'

class EditTodo extends Component {
  constructor(props) {
    super(props)
    let todoId = this.props.match.params.id
    if (!todoId) {
      let newTodo = this.props.addTodo({
        header: "",
        items: []
      })
      todoId = newTodo.payload.id
    }
    this.state = {
      id: parseInt(todoId, 10),
      text: ''
    }
  }

  render() {
    return (
      <div className="todos">
        <Todo id={this.state.id}
          addItem={<AddItem id={this.state.id} />}
          removeTodo={<RemoveTodo id={this.state.id} />}
          showDelete={true}
        />
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
    todos: state.todos
  }),
  {
    addText,
    addTodo
  }
)(EditTodo))
