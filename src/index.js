import React from 'react'
import { render } from 'react-dom'

import { createStore, compose } from 'redux'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'inc': return state + 1
    case 'dec': return state - 1
    default:    return state
  }
}

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(counter)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'inc' })
store.dispatch({ type: 'inc' })
store.dispatch({ type: 'inc' })
store.dispatch({ type: 'inc' })

render(<h1>hello</h1>,
  document.querySelector('#app'))