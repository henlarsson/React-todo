import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { deleteTodo } from '../actions'
import { Todo } from './'

class Todos extends Component {
  toEditMode = (id) => {
    const url = `/Todo/${id}`
    this.props.history.push(url)
  }

  renderItems = () => {
    return this.props.todos
      .map((todo, key) => {
        return <div key={todo.id} onClick={() => this.toEditMode(todo.id)}>
          <Todo id={todo.id} showDelete={false} noevent={true} />
        </div>
      })
  }

  render() {
    return (
      <div>
        <div className="notes">
          {this.props.todos && this.renderItems()}
        </div>
        {this.props.todos && this.props.todos.length <= 0 &&
          <div>
            You haven't created any todos. To create click <Link to="/todo">here</Link>
          </div>
        }
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
    todos: state.todos
  }),
  {
    deleteTodo
  }
)(Todos))