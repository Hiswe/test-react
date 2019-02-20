import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import ShopList from './shop-list'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true }
  }

  render() {
    const { state } = this
    const { hasError } = state
    return (
      <div className="App">
        <Helmet>
          <title>Test React by Hiswe</title>
          <link
            href="https://fonts.googleapis.com/css?family=Lato"
            rel="stylesheet"
          />
        </Helmet>
        {hasError ? <h1>Something went wrong.</h1> : <ShopList />}
      </div>
    )
  }
}

export default App
