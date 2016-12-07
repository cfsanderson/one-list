import React, { Component } from 'react'
// import styles from './screen.sass'

class App extends Component {

  constructor () {
    super()
    this.state = {
      items: ['apple', 'banana', 'potato']
    }
  }

  render () {
    const items = this.state.items.map((item) => {
      return <li> {item} </li>
    })
    return <div>
      <header>
        <h1>One List?!</h1>
      </header>
      <ul>
        {items}
      </ul>
      <form>
        <input type='text' name='todo' placeholder='Wat' />
      </form>
    </div>
  }
}

export default App
