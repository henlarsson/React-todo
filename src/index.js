import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import configureStore from './configureStore'
import './static/css/index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
