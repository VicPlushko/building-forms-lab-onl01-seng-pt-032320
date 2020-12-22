// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
    
  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='band-input'>Band Name</label>
          <input type='text' onChange={this.handleChange}></input>
          <input type='submit' value='Submit'></input>  
        </form>
      </div>
    )
  }
}

export default BandInput
