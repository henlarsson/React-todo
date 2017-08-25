import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { EditTodo, Todos, NoPage, About } from './'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">ROOT</Link>
            <Link to="/todo">NEW</Link>
            <Link to="/todos">TODOS</Link>
            <Link to="/about">ABOUT</Link>
          </nav>
          <div className="container">
            <div>
              <Switch>
                <Route path="/" exact component={Todos} />
                <Route path="/todo/:id" component={EditTodo} />
                <Route path="/todo" component={EditTodo} />
                <Route path="/todos" component={Todos} />
                <Route path="/about" component={About} />
                <Route component={NoPage} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App