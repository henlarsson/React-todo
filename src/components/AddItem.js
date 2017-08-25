import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addText, addTodo } from '../actions'
import { withRouter } from 'react-router-dom'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.updateTextState = this.updateTextState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      text: ''
    }
  }

  updateTextState(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      checked: false
    }
    this.props.addText(
      {
        newItem: newItem,
        id: this.props.id
      })
    this.setState((prevState) => ({
      text: ''
    }))
  }

  render() {
    return (
      <div className="note-add">
        <form onSubmit={this.handleSubmit}>
          <input className="inputText"
            placeholder="New item"
            onChange={this.updateTextState}
            value={this.state.text} />
          <button disabled={!this.state.text} >Add</button>
        </form>
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
)(AddItem))
