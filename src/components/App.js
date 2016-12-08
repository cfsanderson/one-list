import React, { Component } from 'react'
import styles from '../styles/screen.sass'

class App extends Component {

  constructor () {
    super()
    this.state = {
      items: [],
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: this.state.items.concat({
        label: this.state.value,
        done: false
      }),
      // concat is like push, but push modifies the array itself
      value: ''
    })
  }

  onClick = (event) => {

  }

  toggleComplete = (i) => {
    const items = this.state.items.slice()
    items[i].done = !items[i].done
    this.setState({
      items: items
    })
  }

  render () {
    const items = this.state.items.map((item, i) => {
      const isDone = item.done ? styles.done : ''
      return <li className={isDone} key={i} onClick={() => this.toggleComplete(i)}> {item.label} </li>
    })
    return <div className={styles.root}>
      <main>
        <header>
          <h1>One List?!</h1>
        </header>
        <ul>
          {items}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value}
            onChange={this.handleChange}
            placeholder='What to do?' />
        </form>
      </main>
    </div>
  }
}

export default App
