import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import { withRouter } from 'react-router-dom'

class RemoveTodo extends Component {
  constructor(props) {
    super(props)
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(e) {
    e.preventDefault();
    this.props.deleteTodo(
      {
        id: this.props.id
      })
    this.props.history.push('/todos')
  }

  render() {
    return (
      <button type="button" onClick={this.removeTodo} >Remove todo</button>
    );
  }
}

export default withRouter(connect(
  state => ({}),
  {
    deleteTodo
  }
)(RemoveTodo))
