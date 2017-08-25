import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateItem, updateHeader, deleteItem } from '../actions'
import { withRouter, Redirect } from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.updateHeader = this.updateHeader.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      header: '',
      items: []
    }
  }

  updateHeader(e) {
    if (this.props.noevent) return false
    this.props.updateHeader({ id: this.props.id, header: e.target.value })
  }

  updateCheckbox(e, key, items) {
    if (this.props.noevent) return false
    const item = items.find(item => item.id === key)
    item.checked = e.target.checked
    this.props.updateItem({ id: this.props.id, items: items })
  }

  updateItem(e, key, items) {
    if (this.props.noevent) return false
    const item = items.find(item => item.id === key)

    item.text = e.target.value
    this.props.updateItem({ id: this.props.id, items: items })
  }

  deleteItem(e, id) {
    e.preventDefault()
    this.props.deleteItem({ id: this.props.id, itemId: id })
  }

  render() {
    const todos = this.props.todos
    const todo = todos.find(todo => todo.id === this.props.id)
    if (!todo) {
      return <Redirect to="/Error" push />
    }

    return (
      <div className="note">
        <div className="note-inner">
          <input
            className="note-header"
            placeholder="Write header"
            onChange={this.updateHeader}
            value={todo.header} />
          {todo.items
            .sort((a, b) => a.checked - b.checked)
            .map((item) => {
              return <div key={item.id}>
                <input type="checkbox" defaultChecked={item.checked} onChange={(e) => this.updateCheckbox(e, item.id, todo.items)} />
                <input
                  className={`inputText ${item.checked && "checkedItem"}`}
                  onChange={(e) => this.updateItem(e, item.id, todo.items)}
                  value={item.text} />
                {this.props.showDelete &&
                  <i
                    className="fa fa-trash-o note-item-delete"
                    aria-hidden="true"
                    onClick={(e) => this.deleteItem(e, item.id)}>
                  </i>
                }
              </div>
            })}
          {this.props.addItem}
          {this.props.removeTodo}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
    todos: state.todos
  }),
  {
    updateItem,
    updateHeader,
    deleteItem
  }
)(AddTodo))
