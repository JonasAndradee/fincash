import React from 'react'
import ReactDOM from 'react-dom'

import './presentation/theme/global.css'

import Router from './main/routes/router'
import { Provider } from 'react-redux'
import { store } from './frameworks/redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
