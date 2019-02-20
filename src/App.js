import React, { Component } from 'react'

import ShopList from './shop-list'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render() {
    const { state } = this
    const { hasError } = state
    return (
      <div className="App">
        {hasError ? <h1>Something went wrong.</h1> : <ShopList />}
      </div>
    )
  }
}

export default App
